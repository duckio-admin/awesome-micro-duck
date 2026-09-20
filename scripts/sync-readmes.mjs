import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "../awesome-microduck/readme.md");
const source = await readFile(sourcePath, "utf8");

const groups = ["policies", "hardware", "learn", "resources", "news", "community"];
const taxonomy = {
  policies: { en: "Policies", zh: "策略", note: "Deployable behaviors and task definitions.", noteZh: "可部署行为、训练策略与任务定义。" },
  hardware: { en: "Hardware", zh: "硬件", note: "Robots, accessories, parts and fabrication.", noteZh: "机器人、配件、零部件与制造项目。" },
  learn: { en: "Learn", zh: "学习", note: "Authoritative references and task-oriented tutorials.", noteZh: "权威参考资料与面向任务的教程。" },
  resources: { en: "Resources", zh: "资源", note: "Reusable datasets, simulators, tools, apps and registries.", noteZh: "可复用的数据集、仿真器、工具、应用与注册中心。" },
  news: { en: "News", zh: "动态", note: "Official updates, ecosystem stories and media coverage.", noteZh: "官方更新、生态故事与媒体报道。" },
  community: { en: "Community", zh: "社区", note: "Places to meet, share, build and contribute.", noteZh: "交流、分享、共建与参与贡献的社区入口。" },
};

const sectionMap = {
  Official: ["resources", "tool"],
  Documentation: ["learn", "reference"],
  "Simulation and Training": ["resources", "training"],
  "Policies and Skills": ["policies", "agility"],
  "Datasets and Benchmarks": ["resources", "dataset"],
  "Agent Tools and MCP": ["resources", "agent-tool"],
  "Community Hubs and Registries": ["resources", "registry"],
  "Apps and Ports": ["resources", "app"],
  "Hardware and Fabrication": ["hardware", "parts-mods"],
  "Articles and Coverage": ["news", "media"],
  Videos: ["news", "media"],
  Community: ["community", "community"],
  Lineage: ["hardware", "robots"],
};

const subtypeLabels = {
  agility: ["Agility", "敏捷运动"], locomotion: ["Locomotion", "移动"], manipulation: ["Manipulation", "操作"], recovery: ["Recovery", "恢复"],
  robots: ["Robots", "机器人"], accessories: ["Accessories", "配件"], "parts-mods": ["Parts & Mods", "零件与改装"],
  reference: ["Reference", "参考资料"], tutorial: ["Tutorial", "教程"], dataset: ["Datasets", "数据集"], benchmark: ["Benchmarks", "基准测试"],
  simulator: ["Simulators", "仿真器"], training: ["Training", "训练框架"], tool: ["Tools & CLI", "工具与命令行"], "agent-tool": ["Agent Tools & MCP", "智能体工具与 MCP"],
  app: ["Apps & Ports", "应用与移植"], registry: ["Registries", "注册中心"], media: ["Media", "媒体"], community: ["Community", "社区"],
};

const subtypeRules = [
  ["policies", "recovery", /recover|stand.?up|self-right/i], ["policies", "manipulation", /pick|carry|grasp|ball|object|beak|courier/i], ["policies", "locomotion", /walk|locomotion|roll|skate|gait|run/i],
  ["hardware", "accessories", /accessor|charger|controller|camera|sensor|hat|pack/i], ["hardware", "robots", /replica|robot|open duck|lineage/i],
  ["resources", "benchmark", /benchmark|bench|evaluation|eval/i], ["resources", "simulator", /simulator|simulation|sandbox|mujoco|genesis|isaac|mjlab/i],
  ["resources", "dataset", /dataset|corpus/i], ["resources", "registry", /registry|hub|directory|catalog/i], ["resources", "app", /app|port|mobile|web interface/i],
];

const tagRules = [
  ["official", /pollen-robotics/i], ["sim-only", /sim-only/i], ["hardware-ready", /hardware|robotd|on-robot|physical robot/i],
  ["open-source", /open.source|Apache|MIT|GitHub/i], ["chinese", /In Chinese/i], ["bilingual", /Chinese and English|English and Chinese/i],
  ["browser", /browser|WebAssembly|WASM|Space/i], ["ros2", /ROS 2|ROS2/i], ["mcp", /MCP/i], ["onnx", /ONNX/i], ["mujoco", /MuJoCo/i], ["isaac", /Isaac/i],
];

const tagZh = { official: "官方", "sim-only": "仅仿真", "hardware-ready": "硬件相关", "open-source": "开源", chinese: "中文", bilingual: "中英双语", browser: "浏览器", ros2: "ROS 2", mcp: "MCP", onnx: "ONNX", mujoco: "MuJoCo", isaac: "Isaac", community: "社区" };

function clean(text) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

const entries = [];
let section = "";
for (const line of source.split("\n")) {
  const heading = line.match(/^## ([^#].*)$/);
  if (heading) { section = heading[1].trim(); continue; }
  if (!sectionMap[section]) continue;
  const match = line.match(/^- \[([^\]]+)\]\((https?:\/\/[^)]+)\)\s*(?:[-–—]\s*)?(.*)$/);
  if (!match) continue;
  const [, title, url, raw] = match;
  const description = clean(raw);
  let [group, subtype] = sectionMap[section];
  if (section === "Official") {
    if (/microduck-policies/i.test(title)) [group, subtype] = ["policies", "locomotion"];
    else if (/emotions/i.test(title)) [group, subtype] = ["resources", "dataset"];
    else if (/sandbox|simulator/i.test(title)) [group, subtype] = ["resources", "simulator"];
    else if (/console|playground|vision demo/i.test(title)) [group, subtype] = ["resources", "app"];
    else if (/product page|store|press kit|meet microduck/i.test(title)) [group, subtype] = ["news", "media"];
  }
  for (const [candidateGroup, candidateSubtype, matcher] of subtypeRules) {
    if (candidateGroup === group && matcher.test(`${title} ${description}`)) { subtype = candidateSubtype; break; }
  }
  const tags = tagRules.filter(([, matcher]) => matcher.test(`${title} ${url} ${description}`)).map(([tag]) => tag);
  if (section === "Official" && !tags.includes("official")) tags.unshift("official");
  if (!tags.includes("official")) tags.push("community");
  entries.push({ title, url, description, group, subtype, tags: [...new Set(tags)].slice(0, 4) });
}

const supplementalEntries = [
  {
    title: "Microduck Stairs Challenge",
    url: "https://huggingface.co/datasets/craigm26/microduck-stairs-challenge",
    description: "Simulation-only, hash-pinned benchmark for getting Microduck upright onto a step, with a reproducible MuJoCo scorer, robustness grid, leaderboard, saved intents and documented negative results.",
    descriptionZh: "仅仿真的台阶攀爬基准，固定了资产哈希，并提供可复现的 MuJoCo 评分器、鲁棒性网格、排行榜、动作记录与失败实验。",
    group: "resources", subtype: "benchmark", tags: ["sim-only", "open-source", "mujoco", "community"],
  },
  {
    title: "Robot Reel / Microduck Motion Lab",
    url: "https://github.com/noteflowai/robot-reel",
    description: "Replay and evidence toolkit for recorded physical-AI experiments, including two Microduck policy walks with source samples, action and joint traces, offline checks and editable 3D exports.",
    descriptionZh: "物理 AI 实验回放与证据工具，包含两段 Microduck 策略行走记录、动作与关节轨迹、离线校验和可编辑 3D 导出。",
    group: "resources", subtype: "tool", tags: ["open-source", "browser", "community"],
  },
  {
    title: "microduck-move-a-low-crouch-walk",
    url: "https://huggingface.co/tfrere/microduck-move-a-low-crouch-walk",
    description: "Microduck Academy policy for continuous low-crouch walking, published with ONNX weights, a fine-tunable checkpoint, recorded trajectories, lineage metadata and a passing rollout judge.",
    descriptionZh: "Microduck Academy 训练的连续低姿态行走策略，提供 ONNX 权重、可继续微调的检查点、轨迹、来源元数据和通过的 rollout 判定。",
    group: "policies", subtype: "locomotion", tags: ["sim-only", "open-source", "onnx", "community"],
  },
  {
    title: "microduck-move-base-walk",
    url: "https://huggingface.co/tfrere/microduck-move-base-walk",
    description: "From-scratch retraining of the upstream velocity task with its checkpoint and configs for remixing, plus a side-by-side fidelity comparison against Pollen's shipped walking policy.",
    descriptionZh: "从零重训官方速度任务，保留可再训练的检查点和配置，并与 Pollen 发布的行走策略进行同场景保真度对比。",
    group: "resources", subtype: "training", tags: ["sim-only", "open-source", "onnx", "community"],
  },
  {
    title: "microduck-electric-slide-policy",
    url: "https://huggingface.co/Histochemichael/microduck-electric-slide-policy",
    description: "Experimental Electric Slide controller combining the official walk with count-conditioned joint biases; its card publishes physics traces and failed quality gates instead of claiming a finished dance policy.",
    descriptionZh: "将官方行走策略与按节拍变化的关节偏置组合成 Electric Slide 实验控制器，并公开物理轨迹和未通过的质量门槛，不把实验包装成成品。",
    group: "policies", subtype: "agility", tags: ["sim-only", "onnx", "mujoco", "community"],
  },
  {
    title: "microduck-electric-slide-motion",
    url: "https://huggingface.co/datasets/Histochemichael/microduck-electric-slide-motion",
    description: "Motion-reference and validation package for the experimental Electric Slide controller, containing joint trajectories, count-level quality checks, physics traces and failed-experiment provenance.",
    descriptionZh: "Electric Slide 实验控制器的动作参考与验证数据包，包含关节轨迹、逐节拍质量检查、物理轨迹和失败实验来源记录。",
    group: "resources", subtype: "dataset", tags: ["sim-only", "mujoco", "community"],
  },
  {
    title: "microduck-rough-walk-g",
    url: "https://huggingface.co/RemiFabre/microduck-rough-walk-g",
    description: "From-scratch rough-terrain gait that trades higher motor power for stronger stair-and-slope robustness than the author's fine-tuned rough-walk-e policy.",
    descriptionZh: "从零训练的崎岖地形步态，相比作者微调的 rough-walk-e，以更高电机功率换取更强的楼梯与斜坡鲁棒性。",
    group: "policies", subtype: "locomotion", tags: ["sim-only", "open-source", "onnx", "community"],
  },
  {
    title: "MicroDuck BallKick 4096x6000",
    url: "https://huggingface.co/Datawhale/Microduck-BallKick-4096x6000",
    description: "Separately published Microduck ball-kick training run using 4,096 parallel environments and 6,000 PPO iterations, with training artifacts and an ONNX export.",
    descriptionZh: "独立发布的 Microduck 踢球训练实验，使用 4096 个并行环境和 6000 次 PPO 迭代，并提供训练产物与 ONNX 导出。",
    group: "policies", subtype: "manipulation", tags: ["sim-only", "open-source", "onnx", "community"],
  },
  {
    title: "Try Micro Duck",
    url: "https://trymicroduck.com/",
    description: "Unofficial browser playground running the official MuJoCo model and reinforcement-learning policies locally at 50 Hz, with camera-based hand and face interaction and no video upload.",
    descriptionZh: "非官方浏览器游乐场，在本地以 50 Hz 运行官方 MuJoCo 模型与强化学习策略，并提供无需上传视频的手势和表情交互。",
    group: "resources", subtype: "app", tags: ["sim-only", "browser", "onnx", "mujoco"],
  },
  {
    title: "Microduck Vision Soccer",
    url: "https://github.com/toyhank/microduck-vision-soccer",
    description: "Autonomous MuJoCo soccer stack using RGB head-camera frames and proprioception to find, approach and aim at a ball, then execute a bundled ONNX kick through physical contact.",
    descriptionZh: "自主 MuJoCo 足球系统，结合头部 RGB 相机画面与本体感知寻找、接近并瞄准足球，再通过随附的 ONNX 策略完成真实接触踢球。",
    group: "policies", subtype: "manipulation", tags: ["sim-only", "open-source", "onnx", "mujoco"],
  },
  {
    title: "OptiDuck",
    url: "https://github.com/sim336/OptiDuck",
    description: "Physical Microduck-derived biped using a Radxa Zero 3W and lower-cost Feetech bus servos, with MuJoCo/mjlab PPO training, ONNX deployment, board services and an Android maintenance app.",
    descriptionZh: "基于 Microduck 的实体双足机器人，采用 Radxa Zero 3W 和更低成本的 Feetech 总线舵机，包含 MuJoCo/mjlab PPO 训练、ONNX 部署、板端服务和 Android 维护应用。",
    group: "hardware", subtype: "robots", tags: ["hardware-ready", "open-source", "chinese", "onnx"],
  },
  {
    title: "MicroDuck BoBoRedesign",
    url: "https://github.com/AiBoBoMaker/MicroDuck-BoBoRedesign",
    description: "Work-in-progress redesign of the Microduck shell and structure for FDM/SLA printing, organized for printable STL/STEP parts, PCB, firmware and reinforcement-learning assets.",
    descriptionZh: "面向 FDM/SLA 打印的 Microduck 外壳与结构重设计，正在整理可打印 STL/STEP 零件、PCB、固件和强化学习资源。",
    group: "hardware", subtype: "parts-mods", tags: ["hardware-ready", "open-source", "community"],
  },
  {
    title: "BruzMicroduck CAD",
    url: "https://github.com/BruzWJ/BruzMicroduck_CAD",
    description: "Compact CAD repository for a Microduck replica adapted around off-the-shelf sensors, boards and components, separating official reference geometry from editable replica-specific STEP designs.",
    descriptionZh: "围绕现成传感器、开发板和零件适配的 Microduck 复刻 CAD 仓库，将官方参考几何与可编辑的复刻 STEP 设计分开保存。",
    group: "hardware", subtype: "parts-mods", tags: ["hardware-ready", "open-source", "community"],
  },
  {
    title: "Microduck ROS 2 SLAM",
    url: "https://github.com/YahyaLimbo/microduck_ros2_slam",
    description: "Apache-2.0 ROS 2 Jazzy workspace for Microduck mapping and localisation, deriving meshes and kinematics from the official microduck_rl assets.",
    descriptionZh: "用于 Microduck 建图与定位的 Apache-2.0 ROS 2 Jazzy 工作区，网格和运动学来自官方 microduck_rl 资源。",
    group: "resources", subtype: "app", tags: ["open-source", "ros2", "community"],
  },
  {
    title: "MicroDuck Startup",
    url: "https://github.com/superobk/microduck-startup",
    description: "Executable Chinese two-day bootcamp covering the official simulator, microduck_rl tests, a PPO smoke run, CUDA training, 61-to-14 ONNX export and native MuJoCo deployment rehearsal.",
    descriptionZh: "可执行的中文两日训练营，覆盖官方模拟器、microduck_rl 测试、PPO 冒烟训练、CUDA 训练、61 到 14 维 ONNX 导出和原生 MuJoCo 部署演练。",
    group: "learn", subtype: "tutorial", tags: ["sim-only", "open-source", "chinese", "onnx"],
  },
  {
    title: "Sarvoday Microduck Lab",
    url: "https://github.com/sarvob/sarvoday-microduck-lab",
    description: "Reproducible challenge lab with machine-readable goals and pass/fail gates for high-level controllers over frozen official policies, including steering, ball pushing and skill handoffs.",
    descriptionZh: "可复现挑战实验室，以机器可读目标和通过/失败门槛评估官方冻结策略之上的高层控制器，任务包括转向、推球和技能衔接。",
    group: "resources", subtype: "training", tags: ["sim-only", "open-source", "mujoco", "community"],
  },
  {
    title: "MicroDuck Embodied",
    url: "https://github.com/SoryuElvars/microduck-embodied",
    description: "Evaluation and navigation project around the official locomotion policy, covering tracking and fall metrics, dynamics sensitivity, go-to-goal control and a high-level navigator over a frozen gait.",
    descriptionZh: "围绕官方移动策略的评估与导航项目，覆盖跟踪和跌倒指标、动力学敏感性、目标点控制，以及冻结步态之上的高层导航器。",
    group: "resources", subtype: "benchmark", tags: ["sim-only", "open-source", "chinese", "onnx"],
  },
  {
    title: "RPI Robot HAT",
    url: "https://github.com/pollen-robotics/elec_RPI_Robot_HAT",
    description: "Official KiCad 9 design for a Raspberry Pi Zero-sized robot HAT with IMU, TTL and RS-485 servo buses, audio I/O and Qwiic expansion, used by Microduck reconstruction projects.",
    descriptionZh: "官方 KiCad 9 机器人扩展板设计，尺寸适配 Raspberry Pi Zero，提供 IMU、TTL 与 RS-485 舵机总线、音频 I/O 和 Qwiic 扩展，并被 Microduck 复刻项目采用。",
    group: "hardware", subtype: "accessories", tags: ["official", "hardware-ready", "open-source"],
  },
];

const knownUrls = new Set(entries.map(item => item.url.replace(/\/$/, "")));
for (const entry of supplementalEntries) {
  const normalizedUrl = entry.url.replace(/\/$/, "");
  if (!knownUrls.has(normalizedUrl)) {
    entries.push(entry);
    knownUrls.add(normalizedUrl);
  }
}

function badge(tag, lang) {
  const label = lang === "zh" ? (tagZh[tag] ?? tag) : tag;
  return `\`${label}\``;
}

function render(lang) {
  const zh = lang === "zh";
  const title = zh ? "Awesome Microduck 中文版" : "Awesome Microduck";
  const intro = zh
    ? "精选 Microduck 开源生态项目，并按照 [Duckio](https://github.com/) 当前的信息架构与标签体系整理。"
    : "A curated directory of the Microduck open-source ecosystem, organized with Duckio's current information architecture and tags.";
  const lines = [
    `<div align="center">`,
    `  <img src="media/logo.svg" alt="Microduck" width="620">`,
    ``,
    `# ${title}`,
    ``,
    `  <p>${intro.replace("[Duckio](https://github.com/)", "Duckio")}</p>`,
    `  <p><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a></p>`,
    `  <p><a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a> <img src="https://img.shields.io/badge/projects-${entries.length}-00B4D8" alt="${entries.length} projects"> <img src="https://img.shields.io/badge/updated-2026--09-20-FFD23F" alt="Updated 2026-09-20"></p>`,
    `</div>`, ``,
    `## ${zh ? "目录" : "Contents"}`, ``,
    ...groups.flatMap(group => {
      const subtypes = [...new Set(entries.filter(item => item.group === group).map(item => item.subtype))];
      return [
        `- [${taxonomy[group][zh ? "zh" : "en"]}](#${group})`,
        ...subtypes.map(subtype => `  - [${subtypeLabels[subtype]?.[zh ? 1 : 0] ?? subtype}](#${group}-${subtype})`),
      ];
    }),
    `- [${zh ? "标签说明" : "Tag Guide"}](#tag-guide)`,
    `- [${zh ? "贡献" : "Contributing"}](#contributing)`,
    `- [${zh ? "相关仓库" : "Related Repositories"}](#related-repositories)`, ``,
    `> ${zh ? "Microduck 是由 Pollen Robotics 与 Hugging Face 打造的开源双足机器人。本列表由社区独立维护，与相关公司不存在隶属或背书关系。" : "Microduck is an open-source biped robot by Pollen Robotics and Hugging Face. This list is independently maintained by the community and is not affiliated with or endorsed by either company."}`,
    ``,
  ];

  for (const group of groups) {
    const groupEntries = entries.filter(item => item.group === group);
    lines.push(`<a id="${group}"></a>`, `## ${taxonomy[group][zh ? "zh" : "en"]}`, ``, `> ${taxonomy[group][zh ? "noteZh" : "note"]} (${groupEntries.length})`, ``);
    const subtypes = [...new Set(groupEntries.map(item => item.subtype))];
    for (const subtype of subtypes) {
      const items = groupEntries.filter(item => item.subtype === subtype);
      lines.push(`<a id="${group}-${subtype}"></a>`, `### ${subtypeLabels[subtype]?.[zh ? 1 : 0] ?? subtype}`, ``);
      for (const item of items) {
        const tags = item.tags.map(tag => badge(tag, lang)).join(" ");
        const description = zh
          ? (item.descriptionZh ?? `${subtypeLabels[item.subtype]?.[1] ?? "生态"}项目，收录自 Microduck 社区。`)
          : item.description;
        lines.push(`- [${item.title}](${item.url}) - ${description} ${tags}`.trim());
      }
      lines.push("");
    }
  }

  lines.push(`<a id="tag-guide"></a>`, `## ${zh ? "标签说明" : "Tag Guide"}`, ``);
  const guide = zh
    ? [["官方", "官方维护或发布"], ["社区", "社区维护"], ["仅仿真", "尚未在实体硬件验证"], ["硬件相关", "面向实体机器人或硬件"], ["开源", "提供公开源码"], ["中文 / 中英双语", "提供中文内容"], ["浏览器", "可在浏览器运行"], ["MCP / ONNX / MuJoCo / Isaac / ROS 2", "主要技术栈"]]
    : [["official", "Maintained or released by the official team"], ["community", "Community maintained"], ["sim-only", "Not yet validated on physical hardware"], ["hardware-ready", "Targets a physical robot or hardware"], ["open-source", "Public source is available"], ["chinese / bilingual", "Chinese content is available"], ["browser", "Runs in a web browser"], ["MCP / ONNX / MuJoCo / Isaac / ROS 2", "Primary technology"]];
  lines.push(`| ${zh ? "标签" : "Tag"} | ${zh ? "含义" : "Meaning"} |`, `| --- | --- |`, ...guide.map(([tag, meaning]) => `| \`${tag}\` | ${meaning} |`), ``);
  lines.push(
    `<a id="contributing"></a>`,
    `## ${zh ? "贡献" : "Contributing"}`,
    ``,
    zh ? "欢迎提交 Issue 或 Pull Request。新增条目请提供项目链接、简短介绍、所属分类与适用标签，并确保项目与 Microduck 直接相关。" : "Issues and pull requests are welcome. New entries should include a project link, a concise description, the appropriate category and relevant tags, and must be directly related to Microduck.",
    ``,
    `<a id="related-repositories"></a>`,
    `## ${zh ? "相关仓库" : "Related Repositories"}`,
    ``,
    zh ? "- [joeynyc/awesome-microduck](https://github.com/joeynyc/awesome-microduck) - 社区维护的 Microduck 项目清单与本目录的数据来源。" : "- [joeynyc/awesome-microduck](https://github.com/joeynyc/awesome-microduck) - Community-maintained Microduck list and the source catalog for this directory.",
    zh ? "- [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) - Microduck 官方开源仓库。" : "- [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) - The official open-source Microduck repository.",
    "",
  );
  return lines.join("\n");
}

await writeFile(resolve(root, "README.md"), render("en"));
await writeFile(resolve(root, "README.zh-CN.md"), render("zh"));
console.log(`Generated bilingual READMEs with ${entries.length} entries.`);
