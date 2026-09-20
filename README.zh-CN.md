<div align="center">
  <img src="media/logo.svg" alt="Microduck" width="620">

# Awesome Microduck 中文版

  <p>精选 Microduck 开源生态项目，并按照 Duckio 当前的信息架构与标签体系整理。</p>
  <p><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a></p>
  <p><a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a> <img src="https://img.shields.io/badge/projects-198-00B4D8" alt="198 projects"> <img src="https://img.shields.io/badge/updated-2026--09-20-FFD23F" alt="Updated 2026-09-20"></p>
</div>

## 目录

- [策略](#policies)
  - [移动](#policies-locomotion)
  - [敏捷运动](#policies-agility)
  - [操作](#policies-manipulation)
  - [恢复](#policies-recovery)
- [硬件](#hardware)
  - [配件](#hardware-accessories)
  - [零件与改装](#hardware-parts-mods)
  - [机器人](#hardware-robots)
- [学习](#learn)
  - [参考资料](#learn-reference)
  - [教程](#learn-tutorial)
- [资源](#resources)
  - [注册中心](#resources-registry)
  - [仿真器](#resources-simulator)
  - [工具与命令行](#resources-tool)
  - [应用与移植](#resources-app)
  - [数据集](#resources-dataset)
  - [训练框架](#resources-training)
  - [基准测试](#resources-benchmark)
  - [智能体工具与 MCP](#resources-agent-tool)
- [动态](#news)
  - [媒体](#news-media)
- [社区](#community)
  - [社区](#community-community)
- [标签说明](#tag-guide)
- [贡献](#contributing)
- [相关仓库](#related-repositories)

> Microduck 是由 Pollen Robotics 与 Hugging Face 打造的开源双足机器人。本列表由社区独立维护，与相关公司不存在隶属或背书关系。

<a id="policies"></a>
## 策略

> 可部署行为、训练策略与任务定义。 (35)

<a id="policies-locomotion"></a>
### 移动

- [microduck-policies](https://huggingface.co/pollen-robotics/microduck-policies) - 移动项目，收录自 Microduck 社区。 `官方` `开源` `ONNX`
- [microduck-walking yaw ablation](https://github.com/alertform/microduck-walking) - 移动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-moonwalk-backward](https://huggingface.co/fffiloni/microduck-moonwalk-backward-55e6af) - 移动项目，收录自 Microduck 社区。 `社区`
- [More policies on the Hub](https://huggingface.co/models?search=microduck) - 移动项目，收录自 Microduck 社区。 `社区`
- [MicroDuck skills for TorchRL](https://huggingface.co/torchrl/microduck-skills) - 移动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-swing](https://huggingface.co/HannesVonEssen/microduck-swing) - 移动项目，收录自 Microduck 社区。 `仅仿真` `社区`
- [microduck-stilts](https://huggingface.co/HannesVonEssen/microduck-stilts) - 移动项目，收录自 Microduck 社区。 `仅仿真` `硬件相关` `ONNX` `社区`
- [microduck-running](https://huggingface.co/HannesVonEssen/microduck-running) - 移动项目，收录自 Microduck 社区。 `仅仿真` `硬件相关` `社区`
- [microduck-happy-hop](https://huggingface.co/joanfox/microduck-happy-hop) - 移动项目，收录自 Microduck 社区。 `社区`
- [microduck-rl running](https://github.com/zhoumiaosen/microduck-rl) - 移动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [rough-walk-e](https://huggingface.co/RemiFabre/microduck-rough-walk-e) - 移动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-tricks](https://huggingface.co/langli11/microduck-tricks) - 移动项目，收录自 Microduck 社区。 `仅仿真` `社区`
- [microduck-onefoot-skate](https://github.com/hikarioyama/microduck-onefoot-skate) - 移动项目，收录自 Microduck 社区。 `仅仿真` `开源` `ONNX` `MuJoCo`
- [microduck-move-a-low-crouch-walk](https://huggingface.co/tfrere/microduck-move-a-low-crouch-walk) - Microduck Academy 训练的连续低姿态行走策略，提供 ONNX 权重、可继续微调的检查点、轨迹、来源元数据和通过的 rollout 判定。 `仅仿真` `开源` `ONNX` `社区`
- [microduck-rough-walk-g](https://huggingface.co/RemiFabre/microduck-rough-walk-g) - 从零训练的崎岖地形步态，相比作者微调的 rough-walk-e，以更高电机功率换取更强的楼梯与斜坡鲁棒性。 `仅仿真` `开源` `ONNX` `社区`

<a id="policies-agility"></a>
### 敏捷运动

- [microduck-backflip](https://github.com/Lulzx/microduck-backflip) - 敏捷运动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Jump playground](https://github.com/Liyucheng1997/318_lab-microduck-simulator) - 敏捷运动项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `社区`
- [microduck-sidekick-dance](https://github.com/pezzonovante7/microduck-sidekick-dance) - 敏捷运动项目，收录自 Microduck 社区。 `开源` `社区`
- [Microduck Circus](https://github.com/ros-claw/microduck) - 敏捷运动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-flamingo-cycle](https://huggingface.co/RemiFabre/microduck-flamingo-cycle) - 敏捷运动项目，收录自 Microduck 社区。 `社区`
- [microduck-polite-bow](https://huggingface.co/fffiloni/microduck-polite-bow-b1d864) - 敏捷运动项目，收录自 Microduck 社区。 `社区`
- [microduck-climb](https://huggingface.co/HannesVonEssen/microduck-climb) - 敏捷运动项目，收录自 Microduck 社区。 `仅仿真` `社区`
- [Collision Flamingo II](https://huggingface.co/Teethyfish/microduck-collision-flamingo-ii) - 敏捷运动项目，收录自 Microduck 社区。 `仅仿真` `ONNX` `社区`
- [MicroDuck Jump](https://github.com/chenp9527/microduck-jump) - 敏捷运动项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-detector](https://huggingface.co/pngwn/microduck-detector) - 敏捷运动项目，收录自 Microduck 社区。 `社区`
- [microduck-electric-slide-policy](https://huggingface.co/Histochemichael/microduck-electric-slide-policy) - 将官方行走策略与按节拍变化的关节偏置组合成 Electric Slide 实验控制器，并公开物理轨迹和未通过的质量门槛，不把实验包装成成品。 `仅仿真` `ONNX` `MuJoCo` `社区`

<a id="policies-manipulation"></a>
### 操作

- [microduck-courier](https://github.com/selinayfilizp/microduck-courier) - 操作项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-max-height-jump](https://github.com/ThomasBurgess2000/microduck-max-height-jump) - 操作项目，收录自 Microduck 社区。 `仅仿真` `开源` `ONNX` `社区`
- [microduck-basketball](https://huggingface.co/HannesVonEssen/microduck-basketball) - 操作项目，收录自 Microduck 社区。 `社区`
- [Microduck RL 4096x6000](https://huggingface.co/Datawhale/Microduck-RL-4096x6000) - 操作项目，收录自 Microduck 社区。 `仅仿真` `开源` `ONNX` `社区`
- [MicroDuck BallKick 4096x6000](https://huggingface.co/Datawhale/Microduck-BallKick-4096x6000) - 独立发布的 Microduck 踢球训练实验，使用 4096 个并行环境和 6000 次 PPO 迭代，并提供训练产物与 ONNX 导出。 `仅仿真` `开源` `ONNX` `社区`
- [Microduck Vision Soccer](https://github.com/toyhank/microduck-vision-soccer) - 自主 MuJoCo 足球系统，结合头部 RGB 相机画面与本体感知寻找、接近并瞄准足球，再通过随附的 ONNX 策略完成真实接触踢球。 `仅仿真` `开源` `ONNX` `MuJoCo`

<a id="policies-recovery"></a>
### 恢复

- [microduck-step-up-policy](https://github.com/bihaokun/microduck-step-up-policy) - 恢复项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [beak-throw](https://github.com/llama/microduck-beak-throw) - 恢复项目，收录自 Microduck 社区。 `仅仿真` `硬件相关` `开源` `社区`
- [microduck-standup](https://huggingface.co/QingMuLYL/microduck-standup) - 恢复项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`

<a id="hardware"></a>
## 硬件

> 机器人、配件、零部件与制造项目。 (21)

<a id="hardware-accessories"></a>
### 配件

- [OpenMicroDuck](https://github.com/SaberOnGo/open-microduck) - 配件项目，收录自 Microduck 社区。 `硬件相关` `开源` `中英双语` `社区`
- [microduck-replica-cad](https://github.com/fanhao375/microduck-replica-cad) - 配件项目，收录自 Microduck 社区。 `开源` `中文` `社区`
- [microduck-hardware-replica](https://github.com/lingzolabs/microduck-hardware-replica) - 配件项目，收录自 Microduck 社区。 `硬件相关` `开源` `中文` `社区`
- [Microduck build tutorial](https://github.com/AI-FanGe/Microduck-build-tutorial) - 配件项目，收录自 Microduck 社区。 `硬件相关` `开源` `中文` `ONNX`
- [Microduck DIY build docs](https://github.com/wslengzhicheng/microduck-diy) - 配件项目，收录自 Microduck 社区。 `开源` `中文` `社区`
- [Microduck Replica Kit](https://github.com/qianen6/microduck-replica-kit) - 配件项目，收录自 Microduck 社区。 `硬件相关` `开源` `中文` `社区`
- [Fanduck](https://github.com/7757/fanduck) - 配件项目，收录自 Microduck 社区。 `开源` `中文` `社区`
- [RPI Robot HAT](https://github.com/pollen-robotics/elec_RPI_Robot_HAT) - 官方 KiCad 9 机器人扩展板设计，尺寸适配 Raspberry Pi Zero，提供 IMU、TTL 与 RS-485 舵机总线、音频 I/O 和 Qwiic 扩展，并被 Microduck 复刻项目采用。 `官方` `硬件相关` `开源`

<a id="hardware-parts-mods"></a>
### 零件与改装

- [microduck-diy](https://github.com/ScrapMeta/microduck-diy) - 零件与改装项目，收录自 Microduck 社区。 `开源` `中文` `社区`
- [OpenMicroDuck (FreeCAD)](https://github.com/MengyangGao/OpenMicroDuck) - 零件与改装项目，收录自 Microduck 社区。 `开源` `中文` `MuJoCo` `社区`
- [MicroDuck BoBoRedesign](https://github.com/AiBoBoMaker/MicroDuck-BoBoRedesign) - 面向 FDM/SLA 打印的 Microduck 外壳与结构重设计，正在整理可打印 STL/STEP 零件、PCB、固件和强化学习资源。 `硬件相关` `开源` `社区`
- [BruzMicroduck CAD](https://github.com/BruzWJ/BruzMicroduck_CAD) - 围绕现成传感器、开发板和零件适配的 Microduck 复刻 CAD 仓库，将官方参考几何与可编辑的复刻 STEP 设计分开保存。 `硬件相关` `开源` `社区`

<a id="hardware-robots"></a>
### 机器人

- [microduck-replica](https://github.com/fanhao375/microduck-replica) - 机器人项目，收录自 Microduck 社区。 `硬件相关` `开源` `中英双语` `社区`
- [ChinaMicroDuck](https://github.com/Shiyao-Huang/ChinaMicroDuck) - 机器人项目，收录自 Microduck 社区。 `开源` `社区`
- [Microduck Replica Lab](https://github.com/tachytelicdetonation/microduck-replica-lab) - 机器人项目，收录自 Microduck 社区。 `开源` `社区`
- [microduck_imu_to_ttl](https://github.com/avanx/microduck_imu_to_ttl) - 机器人项目，收录自 Microduck 社区。 `硬件相关` `开源` `中文` `社区`
- [Open Duck Mini](https://github.com/apirrone/Open_Duck_Mini) - 机器人项目，收录自 Microduck 社区。 `硬件相关` `开源` `社区`
- [Open Duck Mini Runtime](https://github.com/apirrone/Open_Duck_Mini_Runtime) - 机器人项目，收录自 Microduck 社区。 `开源` `社区`
- [microduck_runtime (legacy)](https://github.com/TommyZihao/microduck_runtime) - 机器人项目，收录自 Microduck 社区。 `官方` `开源`
- [microduck_maploc_rs](https://github.com/apirrone/microduck_maploc_rs) - 机器人项目，收录自 Microduck 社区。 `开源` `社区`
- [OptiDuck](https://github.com/sim336/OptiDuck) - 基于 Microduck 的实体双足机器人，采用 Radxa Zero 3W 和更低成本的 Feetech 总线舵机，包含 MuJoCo/mjlab PPO 训练、ONNX 部署、板端服务和 Android 维护应用。 `硬件相关` `开源` `中文` `ONNX`

<a id="learn"></a>
## 学习

> 权威参考资料与面向任务的教程。 (12)

<a id="learn-reference"></a>
### 参考资料

- [Docs index](https://github.com/pollen-robotics/microduck/blob/main/docs/README.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Cheat sheet](https://github.com/pollen-robotics/microduck/blob/main/docs/robot/cheatsheet.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Architecture](https://github.com/pollen-robotics/microduck/blob/main/docs/design/architecture.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Design docs](https://github.com/pollen-robotics/microduck/tree/main/docs/design) - 参考资料项目，收录自 Microduck 社区。 `官方` `硬件相关` `开源`
- [Policy channel design](https://github.com/pollen-robotics/microduck/blob/main/docs/design/policy-channel-design.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Policy manifest](https://github.com/pollen-robotics/microduck/blob/main/docs/policy-manifest.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Roadmap](https://github.com/pollen-robotics/microduck/blob/main/docs/project/roadmap.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [duckctl](https://github.com/pollen-robotics/microduck/blob/main/docs/robot/duckctl.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Pair a gamepad](https://github.com/pollen-robotics/microduck/blob/main/docs/robot/pair-a-gamepad.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Dev board setup](https://github.com/pollen-robotics/microduck/blob/main/docs/robot/install-dev.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`
- [Contributing guide](https://github.com/pollen-robotics/microduck/blob/main/CONTRIBUTING.md) - 参考资料项目，收录自 Microduck 社区。 `官方` `开源`

<a id="learn-tutorial"></a>
### 教程

- [MicroDuck Startup](https://github.com/superobk/microduck-startup) - 可执行的中文两日训练营，覆盖官方模拟器、microduck_rl 测试、PPO 冒烟训练、CUDA 训练、61 到 14 维 ONNX 导出和原生 MuJoCo 部署演练。 `仅仿真` `开源` `中文` `ONNX`

<a id="resources"></a>
## 资源

> 可复用的数据集、仿真器、工具、应用与注册中心。 (106)

<a id="resources-registry"></a>
### 注册中心

- [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) - 注册中心项目，收录自 Microduck 社区。 `官方` `硬件相关` `开源`
- [Policy Playground](https://huggingface.co/spaces/pollen-robotics/microduck-policy-playground) - 注册中心项目，收录自 Microduck 社区。 `官方` `浏览器`
- [microduck-plugin](https://github.com/acnlabs/microduck-plugin) - 注册中心项目，收录自 Microduck 社区。 `开源` `社区`
- [MicroduckHub](https://microduckhub.com) - 注册中心项目，收录自 Microduck 社区。 `浏览器` `社区`
- [uDuck Registry](https://uduck-registry.pages.dev) - 注册中心项目，收录自 Microduck 社区。 `社区`

<a id="resources-simulator"></a>
### 仿真器

- [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) - 仿真器项目，收录自 Microduck 社区。 `官方` `开源` `MuJoCo`
- [Microduck Sandbox](https://huggingface.co/spaces/pollen-robotics/microduck-simulator) - 仿真器项目，收录自 Microduck 社区。 `官方` `浏览器` `ONNX` `MuJoCo`
- [microduck-rl-genesis](https://github.com/Macmachi/microduck-rl-genesis) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Isaac Lab Microduck port](https://github.com/5usu/IsaacLab/blob/microduck-port/source/isaaclab_microduck/docs/README.md) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `Isaac` `社区`
- [isaaclab-microduck (Newton)](https://github.com/kabilankb/isaaclab-microduck) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `Isaac` `社区`
- [microduck-ros2-isaac](https://github.com/osrbot/microduck-ros2-isaac) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `ROS 2` `Isaac`
- [microduck-ai-world](https://github.com/shaibuafeez/microduck-ai-world) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MuJoCo` `社区`
- [microduck-sim-playground](https://github.com/x10zyn/microduck-sim-playground) - 仿真器项目，收录自 Microduck 社区。 `开源` `浏览器` `MuJoCo` `社区`
- [microduck-rl-lab](https://github.com/AlexandreEDMOND/microduck-rl-lab) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MuJoCo` `社区`
- [microduck-miniverse](https://github.com/DollhouseRobotics/microduck-miniverse) - 仿真器项目，收录自 Microduck 社区。 `开源` `ONNX` `社区`
- [Microduck RL Ball Follow](https://github.com/yangyihai/Microduck_RL_Ball_Follow) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MuJoCo` `社区`
- [Wicroduck](https://github.com/ngxson/wicroduck) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `MuJoCo`
- [MicroDuck Unity Sim2Sim](https://github.com/sgyli7/MicroDuck-Unity-Sim2Sim) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `ONNX` `MuJoCo`
- [MicroDuck Swan Lake](https://github.com/jjshdbndg/microduck-motrixsim) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `社区`
- [mjlab-sycl](https://github.com/guang384/mjlab-sycl) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microdux](https://github.com/noahfarr/microdux) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MuJoCo` `社区`
- [microduck-mjbatch](https://github.com/tailong-wu/microduck-mjbatch) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MuJoCo` `社区`
- [microduck_genesis](https://github.com/green-creeper/microduck_genesis) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `ONNX` `社区`
- [joeynyc/microduck-mcp](https://github.com/joeynyc/microduck-mcp) - 仿真器项目，收录自 Microduck 社区。 `硬件相关` `开源` `MCP` `MuJoCo`
- [aj-dev-smith/microduck-mcp](https://github.com/aj-dev-smith/microduck-mcp) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MCP` `MuJoCo`
- [quackd](https://github.com/rokbenko/quackd) - 仿真器项目，收录自 Microduck 社区。 `开源` `MCP` `社区`
- [Strands Robots Microduck provider](https://strands-labs.github.io/robots/policies/microduck/) - 仿真器项目，收录自 Microduck 社区。 `硬件相关` `开源` `ONNX` `MuJoCo`
- [MicroDuck TinyVLA](https://huggingface.co/spaces/AlexWortega/microduck-vla-simulator) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `ONNX` `MuJoCo`
- [microduck-cli](https://github.com/agentculture/microduck-cli) - 仿真器项目，收录自 Microduck 社区。 `硬件相关` `开源` `MuJoCo` `社区`
- [microduck_demo_part1](https://github.com/hjianbo/microduck_demo_part1) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `MuJoCo` `社区`
- [Jevduck](https://github.com/amazedsaint/jevduck) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `MuJoCo`
- [microduck-sim (iPhone)](https://github.com/littlejohntj/microduck-sim) - 仿真器项目，收录自 Microduck 社区。 `开源` `MuJoCo` `社区`
- [Microduck AR](https://huggingface.co/spaces/multimodalart/microduck-ar) - 仿真器项目，收录自 Microduck 社区。 `浏览器` `社区`
- [MicroDuckModels](https://github.com/IronSpiderMan/MicroDuckModels) - 仿真器项目，收录自 Microduck 社区。 `开源` `中文` `中英双语` `浏览器`
- [RL Physics Overlay](https://github.com/carpentry-liu/rl-physics-overlay) - 仿真器项目，收录自 Microduck 社区。 `开源` `中文` `中英双语` `浏览器`
- [Microduck Studio](https://github.com/microai-lab/microduck-studio) - 仿真器项目，收录自 Microduck 社区。 `硬件相关` `开源` `中英双语` `浏览器`
- [Microduck Arena](https://github.com/00make/microduck-arena) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `中英双语` `浏览器`
- [microduck-viewer](https://github.com/MACRL2/microduck-viewer) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `MuJoCo`
- [Microduck Academy](https://github.com/kingsleyli920/microduck-academy) - 仿真器项目，收录自 Microduck 社区。 `开源` `中文` `中英双语` `社区`
- [microduck-docker](https://github.com/srayuth089/microduck-docker) - 仿真器项目，收录自 Microduck 社区。 `开源` `MuJoCo` `社区`
- [Microduck Color Studio](https://github.com/LathamZ/microduck-color-studio) - 仿真器项目，收录自 Microduck 社区。 `开源` `中文` `中英双语` `社区`
- [Bohemian Rhapsody by the Microducks](https://huggingface.co/spaces/FormaLau/microduck-bohemian-rhapsody) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `社区`
- [MicroDuck Mommy Flock](https://huggingface.co/spaces/oliveirabruno01/microduck-mommy-flock) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `社区`
- [Microduck and Reachy Mini Simulator](https://huggingface.co/spaces/FormaLau/microduck-reachy-simulator) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `MuJoCo` `社区`
- [Duck on Desk](https://github.com/Happenmass/duck-on-desk) - 仿真器项目，收录自 Microduck 社区。 `开源` `社区`
- [microduck-imx6ull](https://github.com/TonyRuan/microduck-imx6ull) - 仿真器项目，收录自 Microduck 社区。 `硬件相关` `开源` `中文` `ONNX`
- [Microduck Web](https://github.com/TonyRuan/microduck-web) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `浏览器`
- [Microduck Android](https://github.com/TonyRuan/microduck-android) - 仿真器项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `MuJoCo`

<a id="resources-tool"></a>
### 工具与命令行

- [pollen-robotics/microduck-gst-plugins](https://github.com/pollen-robotics/microduck-gst-plugins) - 工具与命令行项目，收录自 Microduck 社区。 `官方` `硬件相关` `开源`
- [microduck-duck-detector](https://huggingface.co/pollen-robotics/microduck-duck-detector) - 工具与命令行项目，收录自 Microduck 社区。 `官方` `ONNX`
- [pollen-robotics/duck_detector](https://github.com/pollen-robotics/duck_detector) - 工具与命令行项目，收录自 Microduck 社区。 `官方` `开源`
- [Robot Reel / Microduck Motion Lab](https://github.com/noteflowai/robot-reel) - 物理 AI 实验回放与证据工具，包含两段 Microduck 策略行走记录、动作与关节轨迹、离线校验和可编辑 3D 导出。 `开源` `浏览器` `社区`

<a id="resources-app"></a>
### 应用与移植

- [Microduck Console](https://huggingface.co/spaces/pollen-robotics/microduck-console) - 应用与移植项目，收录自 Microduck 社区。 `官方` `浏览器`
- [Vision demo](https://huggingface.co/spaces/pollen-robotics/microduck-vision-demo) - 应用与移植项目，收录自 Microduck 社区。 `官方` `硬件相关` `浏览器`
- [microduck-lab (Apple Silicon)](https://github.com/jonathanhawkins/microduck-lab) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `社区`
- [Microduck RL one-click toolkit](https://github.com/OneRobotAI/microduck) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `ONNX`
- [microduck_rl_unilab](https://github.com/rocPAI-Forge/microduck_rl_unilab) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `社区`
- [microduck-locomotion-diagnosis](https://github.com/Qi-hub-dot/microduck-locomotion-diagnosis) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `社区`
- [DuckKit](https://github.com/craigm26/duckkit) - 应用与移植项目，收录自 Microduck 社区。 `开源` `ONNX` `社区`
- [Microduck WebXR](https://github.com/ApurvK032/microduck-webxr) - 应用与移植项目，收录自 Microduck 社区。 `开源` `浏览器` `社区`
- [Microduck Anatomy](https://huggingface.co/spaces/mishig/microduck-anatomy) - 应用与移植项目，收录自 Microduck 社区。 `浏览器` `社区`
- [microduck-tracking](https://github.com/AlexBodner/microduck-tracking) - 应用与移植项目，收录自 Microduck 社区。 `开源` `社区`
- [specs-microduck](https://github.com/kgediya/specs-microduck) - 应用与移植项目，收录自 Microduck 社区。 `开源` `社区`
- [microquack](https://osolmaz.github.io/microquack/) - 应用与移植项目，收录自 Microduck 社区。 `开源` `浏览器` `社区`
- [Kinematic viewer](https://github.com/taherfattahi/microduck-rigid-body-kinematic-viewer) - 应用与移植项目，收录自 Microduck 社区。 `开源` `浏览器` `社区`
- [3D bipedal teleop](https://huggingface.co/spaces/hwihwalab/microduck-3d-bipedal-teleop) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `ONNX` `社区`
- [esp-duck](https://github.com/xingxingRealzyx/esp-duck) - 应用与移植项目，收录自 Microduck 社区。 `开源` `社区`
- [spacemit-microduck](https://github.com/fivif/spacemit-microduck) - 应用与移植项目，收录自 Microduck 社区。 `开源` `中文` `浏览器` `社区`
- [DuckFly](https://github.com/amazedsaint/duckfly) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `社区`
- [FlyWire MicroDuck](https://huggingface.co/spaces/AlexWortega/flywire-microduck) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `社区`
- [Microduck Racer](https://huggingface.co/spaces/Nirav-Madhani/microduck-racer) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `浏览器` `社区`
- [Microduck Playground Competition](https://huggingface.co/spaces/HandsomeWu666/Microduck-playground-competition) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `浏览器` `社区`
- [Duck-Man](https://github.com/nyle-prosal/duckman-microduck) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Quackify](https://huggingface.co/spaces/cat5v/microduck-songbook) - 应用与移植项目，收录自 Microduck 社区。 `硬件相关` `浏览器` `社区`
- [Microduck beak lab](https://github.com/qilinxiaoxiang/microduck-beak-lab) - 应用与移植项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Try Micro Duck](https://trymicroduck.com/) - 非官方浏览器游乐场，在本地以 50 Hz 运行官方 MuJoCo 模型与强化学习策略，并提供无需上传视频的手势和表情交互。 `仅仿真` `浏览器` `ONNX` `MuJoCo`
- [Microduck ROS 2 SLAM](https://github.com/YahyaLimbo/microduck_ros2_slam) - 用于 Microduck 建图与定位的 Apache-2.0 ROS 2 Jazzy 工作区，网格和运动学来自官方 microduck_rl 资源。 `开源` `ROS 2` `社区`

<a id="resources-dataset"></a>
### 数据集

- [microduck-emotions](https://huggingface.co/datasets/pollen-robotics/microduck-emotions) - 数据集项目，收录自 Microduck 社区。 `官方` `开源`
- [Policy golden vectors](https://huggingface.co/datasets/craigm26/microduck-policy-golden-vectors) - 数据集项目，收录自 Microduck 社区。 `社区`
- [Trajectory dataset](https://huggingface.co/datasets/allen73/microduck-trajectory-dataset) - 数据集项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Microduck detection dataset](https://huggingface.co/datasets/pngwn/microduck-detection-dataset) - 数据集项目，收录自 Microduck 社区。 `社区`
- [microduck-electric-slide-motion](https://huggingface.co/datasets/Histochemichael/microduck-electric-slide-motion) - Electric Slide 实验控制器的动作参考与验证数据包，包含关节轨迹、逐节拍质量检查、物理轨迹和失败实验来源记录。 `仅仿真` `MuJoCo` `社区`

<a id="resources-training"></a>
### 训练框架

- [microduck_description](https://github.com/adityakamath/microduck_description) - 训练框架项目，收录自 Microduck 社区。 `开源` `ROS 2` `社区`
- [microduck-rl-on-thor](https://github.com/metahubaifeel/microduck-rl-on-thor) - 训练框架项目，收录自 Microduck 社区。 `硬件相关` `开源` `中英双语` `社区`
- [Microduck School](https://huggingface.co/spaces/ysharma/gr-workflow-microduck-school) - 训练框架项目，收录自 Microduck 社区。 `浏览器` `社区`
- [MicroDuck Playground](https://github.com/Vottivott/microduck-playground) - 训练框架项目，收录自 Microduck 社区。 `硬件相关` `开源` `社区`
- [microduck-rl-torch](https://github.com/bsprenger/microduck-rl-torch) - 训练框架项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [microduck-move-base-walk](https://huggingface.co/tfrere/microduck-move-base-walk) - 从零重训官方速度任务，保留可再训练的检查点和配置，并与 Pollen 发布的行走策略进行同场景保真度对比。 `仅仿真` `开源` `ONNX` `社区`
- [Sarvoday Microduck Lab](https://github.com/sarvob/sarvoday-microduck-lab) - 可复现挑战实验室，以机器可读目标和通过/失败门槛评估官方冻结策略之上的高层控制器，任务包括转向、推球和技能衔接。 `仅仿真` `开源` `MuJoCo` `社区`

<a id="resources-benchmark"></a>
### 基准测试

- [microduck-lab](https://github.com/jvpflum/microduck-lab) - 基准测试项目，收录自 Microduck 社区。 `开源` `浏览器` `社区`
- [isaaclab_microduck (PhysX)](https://github.com/dreamerarun/isaaclab_microduck) - 基准测试项目，收录自 Microduck 社区。 `仅仿真` `开源` `ONNX` `Isaac`
- [duckbench](https://github.com/craigm26/duckbench) - 基准测试项目，收录自 Microduck 社区。 `开源` `浏览器` `MCP` `MuJoCo`
- [RDK Robot Learning Platform](https://github.com/D-Robotics/robot-learning-platform) - 基准测试项目，收录自 Microduck 社区。 `开源` `中文` `浏览器` `社区`
- [MotrixLab MicroDuck rollers](https://github.com/jjshdbndg/MotrixLab-MicroDuck) - 基准测试项目，收录自 Microduck 社区。 `仅仿真` `开源` `中文` `中英双语`
- [microduck_rl_tutorial](https://github.com/rocPAI-Forge/microduck_rl_tutorial) - 基准测试项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Microduck Carpet Lab](https://github.com/yuecui0130-create/microduck-carpet-lab) - 基准测试项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`
- [Microduck Ball Challenge](https://huggingface.co/datasets/craigm26/microduck-ball-challenge) - 基准测试项目，收录自 Microduck 社区。 `仅仿真` `社区`
- [Microduck Stairs Challenge](https://huggingface.co/datasets/craigm26/microduck-stairs-challenge) - 仅仿真的台阶攀爬基准，固定了资产哈希，并提供可复现的 MuJoCo 评分器、鲁棒性网格、排行榜、动作记录与失败实验。 `仅仿真` `开源` `MuJoCo` `社区`
- [MicroDuck Embodied](https://github.com/SoryuElvars/microduck-embodied) - 围绕官方移动策略的评估与导航项目，覆盖跟踪和跌倒指标、动力学敏感性、目标点控制，以及冻结步态之上的高层导航器。 `仅仿真` `开源` `中文` `ONNX`

<a id="resources-agent-tool"></a>
### 智能体工具与 MCP

- [meckie-duck-gateway](https://github.com/rangerchaz/meckie-duck-gateway) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `硬件相关` `开源` `社区`
- [OpenCastor Microduck integration](https://docs.opencastor.com/robots/microduck/) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `硬件相关` `社区`
- [Microduck Lab (gr.Workflow)](https://huggingface.co/spaces/ysharma/gr-workflow-microduck-lab) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `浏览器` `社区`
- [quacksat](https://github.com/andreagenovese/quacksat) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `开源` `社区`
- [microduck-remote-policy-server](https://github.com/lukegao209/microduck-remote-policy-server) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `硬件相关` `开源` `ONNX` `社区`
- [Harboria](https://github.com/Harboria/harboria) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `硬件相关` `开源` `社区`
- [Jev drives a MicroDuck](https://github.com/miguelaeh/jev-microduck) - 智能体工具与 MCP项目，收录自 Microduck 社区。 `仅仿真` `开源` `社区`

<a id="news"></a>
## 动态

> 官方更新、生态故事与媒体报道。 (20)

<a id="news-media"></a>
### 媒体

- [Product page](https://pollen-robotics.com/microduck) - 媒体项目，收录自 Microduck 社区。 `官方`
- [Store](https://store.pollen-robotics.com/products/microduck) - 媒体项目，收录自 Microduck 社区。 `官方`
- [Press kit](https://pollen-robotics.com/microduck/press-kit/) - 媒体项目，收录自 Microduck 社区。 `官方`
- [Meet Microduck](https://pollen-robotics.com/microduck/blog/introducing-microduck/) - 媒体项目，收录自 Microduck 社区。 `官方`
- [TechCrunch](https://techcrunch.com/2026/08/27/hugging-face-is-selling-a-cute-399-open-source-duck-robot-microduck/) - 媒体项目，收录自 Microduck 社区。 `开源` `社区`
- [WhatDuck](https://duck.whatled.com) - 媒体项目，收录自 Microduck 社区。 `硬件相关` `中文` `社区`
- [Engadget](https://www.engadget.com/2245407/huggingface-and-pollen-robotics-opn-pre-orders-for-the-microduck-robot/) - 媒体项目，收录自 Microduck 社区。 `官方`
- [The Register](https://www.theregister.com/ai-and-ml/2026/08/27/hugging-face-offers-399-robot-duck-to-help-you-quack-the-ai-code/5293011) - 媒体项目，收录自 Microduck 社区。 `社区`
- [The New Stack](https://thenewstack.io/hugging-face-microduck-robot/) - 媒体项目，收录自 Microduck 社区。 `社区`
- [IEEE Spectrum](https://spectrum.ieee.org/video-friday-microduck-robot) - 媒体项目，收录自 Microduck 社区。 `社区`
- [Digital Trends](https://www.digitaltrends.com/cool-tech/pollen-robotics-microduck-aims-to-make-training-physical-ai-far-less-fragile-and-cheaper/) - 媒体项目，收录自 Microduck 社区。 `官方`
- [MarkTechPost](https://www.marktechpost.com/2026/08/28/pollen-robotics-hugging-face-microduck-399-open-source-rl-biped-robot/) - 媒体项目，收录自 Microduck 社区。 `官方` `开源`
- [Interesting Engineering](https://interestingengineering.com/ai-robotics/new-robot-duck-learn-from-its-mistakes) - 媒体项目，收录自 Microduck 社区。 `社区`
- [Hacker News discussion](https://news.ycombinator.com/item?id=49462763) - 媒体项目，收录自 Microduck 社区。 `社区`
- [Pointcast 031](https://mhoydich.github.io/pointcast-microduck/) - 媒体项目，收录自 Microduck 社区。 `硬件相关` `开源` `社区`
- [We made a new robot.](https://www.youtube.com/watch?v=RAtzEyGBGFU) - 媒体项目，收录自 Microduck 社区。 `社区`
- [Meet Microduck, the $399 Tiny Robot You Can Teach New Tricks](https://www.youtube.com/watch?v=reiTh7K4KSc) - 媒体项目，收录自 Microduck 社区。 `社区`
- [Microduck Sim 2 Real](https://www.youtube.com/watch?v=szW7N_7B3tU) - 媒体项目，收录自 Microduck 社区。 `社区`
- [Hugging Face Pushes Deeper Into Robotics With MicroDuck](https://www.youtube.com/watch?v=LF7GmLKgvcc) - 媒体项目，收录自 Microduck 社区。 `社区`
- ['Microduck' robot enters growing market of AI toys](https://www.youtube.com/watch?v=i_IMO0knP3I) - 媒体项目，收录自 Microduck 社区。 `社区`

<a id="community"></a>
## 社区

> 交流、分享、共建与参与贡献的社区入口。 (4)

<a id="community-community"></a>
### 社区

- [Pollen Discord](https://discord.com/invite/pollen-community-519098054377340948) - 社区项目，收录自 Microduck 社区。 `社区`
- [Pollen Robotics on Hugging Face](https://huggingface.co/pollen-robotics) - 社区项目，收录自 Microduck 社区。 `官方` `浏览器`
- [Pollen Robotics on YouTube](https://www.youtube.com/@PollenRobotics) - 社区项目，收录自 Microduck 社区。 `社区`
- [@pollenrobotics on X](https://x.com/pollenrobotics) - 社区项目，收录自 Microduck 社区。 `社区`

<a id="tag-guide"></a>
## 标签说明

| 标签 | 含义 |
| --- | --- |
| `官方` | 官方维护或发布 |
| `社区` | 社区维护 |
| `仅仿真` | 尚未在实体硬件验证 |
| `硬件相关` | 面向实体机器人或硬件 |
| `开源` | 提供公开源码 |
| `中文 / 中英双语` | 提供中文内容 |
| `浏览器` | 可在浏览器运行 |
| `MCP / ONNX / MuJoCo / Isaac / ROS 2` | 主要技术栈 |

<a id="contributing"></a>
## 贡献

欢迎提交 Issue 或 Pull Request。新增条目请提供项目链接、简短介绍、所属分类与适用标签，并确保项目与 Microduck 直接相关。

<a id="related-repositories"></a>
## 相关仓库

- [joeynyc/awesome-microduck](https://github.com/joeynyc/awesome-microduck) - 社区维护的 Microduck 项目清单与本目录的数据来源。
- [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) - Microduck 官方开源仓库。
