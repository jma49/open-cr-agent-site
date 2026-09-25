export type StageKind = "code" | "model" | "planned";

export interface Copy {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    start: string;
    github: string;
  };
  proof: { title: string; body: string }[];
  pipeline: {
    eyebrow: string;
    title: string;
    body: string;
    legend: Record<StageKind, string>;
    stages: {
      name: string;
      kind: StageKind;
      summary: string;
      detail: string;
    }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  anatomy: {
    eyebrow: string;
    title: string;
    body: string;
    callouts: {
      quote: string;
      lines: string;
      evidence: string;
      suggestion: string;
    };
  };
  plugins: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    cta: string;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    items: {
      milestone: string;
      title: string;
      body: string;
      status: string;
      done: boolean;
    }[];
  };
  start: {
    title: string;
    body: string;
    copy: string;
    copied: string;
    docs: string;
  };
  footer: {
    tagline: string;
    docs: string;
    github: string;
    license: string;
    manual: string;
  };
}

const en: Copy = {
  hero: {
    badge: "Open source · Early development",
    title: "Code review you can",
    highlight: "actually trust",
    subtitle:
      "ocra runs specialized review agents inside a deterministic pipeline. Every finding is grounded in code the agent read, anchored to the right line, and worth your time.",
    start: "Get started",
    github: "Star on GitHub",
  },
  proof: [
    {
      title: "Deterministic where it must be",
      body: "File selection, grouping and line anchoring are code, not prompts.",
    },
    {
      title: "Agents where judgment matters",
      body: "Focused reviewers with read-only tools and explicit “do not flag” rules.",
    },
    {
      title: "Built to be measured",
      body: "Ships with an AACR-Bench harness: 200 real PRs, 1,505 expert-verified comments.",
    },
  ],
  pipeline: {
    eyebrow: "How it works",
    title: "A pipeline, not a prompt",
    body: "Every stage that must not go wrong is ordinary, tested code. Models only make the calls that need judgment.",
    legend: {
      code: "Deterministic code",
      model: "Model",
      planned: "Planned (M2)",
    },
    stages: [
      {
        name: "Select",
        kind: "code",
        summary: "Pick reviewable files",
        detail:
          "Every changed file is reviewed or excluded with a reason: binary, secret, generated, vendored, lock file or too large. Secrets can never be opted back in; migrations are always reviewed.",
      },
      {
        name: "Triage",
        kind: "code",
        summary: "Assign a risk tier",
        detail:
          "Size and sensitive paths such as auth/ or crypto/ decide how much scrutiny a change gets.",
      },
      {
        name: "Bundle",
        kind: "model",
        summary: "Group related files",
        detail:
          "A light model groups files by index — interface with implementation, translations together. Invalid answers are repaired or fall back to per-file review.",
      },
      {
        name: "Review",
        kind: "model",
        summary: "Isolated agent tasks",
        detail:
          "Each bundle is reviewed by an agent that can only read the revision under review. It quotes code instead of guessing line numbers.",
      },
      {
        name: "Anchor",
        kind: "code",
        summary: "Resolve exact lines",
        detail:
          "Quoted code is matched in the changed hunks, then the whole file, then other changed files. A finding is never silently dropped.",
      },
      {
        name: "Verify",
        kind: "planned",
        summary: "Fact-check findings",
        detail:
          "Each finding is checked against the diff; only findings proven wrong are removed.",
      },
      {
        name: "Judge",
        kind: "planned",
        summary: "Deduplicate and decide",
        detail:
          "A top-tier model merges duplicates across reviewers, calibrates severity and decides the verdict.",
      },
    ],
  },
  features: {
    eyebrow: "Why ocra",
    title: "Built for signal, not volume",
    items: [
      {
        title: "Precision first",
        body: "Reviewers state what they must not flag. Style nits, speculation and unrelated code stay out of your review.",
      },
      {
        title: "Lands on the right line",
        body: "Models quote code; ocra resolves the quote. No invented line numbers, no comments floating on the wrong file.",
      },
      {
        title: "Any model, with failback",
        body: "Configure a chain per tier. Overloads and quota errors move to the next model; failing models are skipped for the run.",
      },
      {
        title: "Cost you can see",
        body: "Input, output, reasoning and cached tokens with the cost of every attempt. Agents are capped at 20 steps.",
      },
      {
        title: "Private by default",
        body: "Your local config, skills and instruction files never reach the model. Tools are read-only and served on localhost with per-run secrets.",
      },
      {
        title: "Plugins all the way down",
        body: "Code hosts, runtimes, reviewers, rule packs, tools and listeners share one plugin contract.",
      },
    ],
  },
  anatomy: {
    eyebrow: "Anatomy of a finding",
    title: "Every comment shows its work",
    body: "A finding carries the code it refers to, the evidence behind it and a minimal fix — so you can accept or dismiss it in seconds.",
    callouts: {
      quote: "The agent quotes the code it means",
      lines: "ocra resolves the quote to exact lines",
      evidence: "Facts verified with read-only tools",
      suggestion: "A minimal fix, when there is one",
    },
  },
  plugins: {
    eyebrow: "Extensible",
    title: "Your conventions, as a plugin",
    body: "Teach reviewers your architecture rules, add a reviewer for your domain, or stream events into your own telemetry. Plugins get a small, typed contract and nothing else.",
    points: [
      "Bootstrap, configure and post-configure lifecycle",
      "Settings validated per plugin",
      "Duplicate or late registrations fail loudly",
    ],
    cta: "Read the plugin guide",
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "Where ocra is today",
    items: [
      {
        milestone: "M1",
        title: "Local review MVP",
        body: "CLI, selection, bundling, anchoring, correctness reviewer, OpenCode runtime, plugins, benchmark harness.",
        status: "Done",
        done: true,
      },
      {
        milestone: "M2",
        title: "Multi-agent review",
        body: "Security and performance reviewers, review matrix, verification, judging and risk tiers.",
        status: "Next",
        done: false,
      },
      {
        milestone: "M3",
        title: "GitHub integration",
        body: "Inline pull request comments, verdicts and incremental re-review.",
        status: "Planned",
        done: false,
      },
      {
        milestone: "M4",
        title: "Production hardening",
        body: "Circuit breakers, remote configuration, review memory and a recall-focused --ultra mode.",
        status: "Planned",
        done: false,
      },
    ],
  },
  start: {
    title: "Review your first change",
    body: "ocra runs locally against any Git repository. Bring a model key: only the change under review and the files reviewers ask for are sent to your model provider.",
    copy: "Copy",
    copied: "Copied",
    docs: "Read the quickstart",
  },
  footer: {
    tagline: "Open-source multi-agent code review.",
    docs: "Documentation",
    github: "GitHub",
    license: "Apache-2.0",
    manual: "User manual",
  },
};

const zh: Copy = {
  hero: {
    badge: "开源 · 早期开发中",
    title: "真正值得",
    highlight: "信任的代码审查",
    subtitle:
      "ocra 在一条确定性的流水线里运行专项审查 agent。每条意见都基于 agent 真正读过的代码，落在正确的行上，值得你花时间看。",
    start: "开始使用",
    github: "在 GitHub 上 Star",
  },
  proof: [
    {
      title: "该确定的地方就确定",
      body: "文件选择、分组和行号定位由代码完成，而不是提示词。",
    },
    {
      title: "需要判断的地方交给 agent",
      body: "专注的审查员，只有只读工具，并明确写了“不该报什么”。",
    },
    {
      title: "为评测而生",
      body: "自带 AACR-Bench 评测工具：200 个真实 PR、1,505 条专家核实的审查意见。",
    },
  ],
  pipeline: {
    eyebrow: "工作原理",
    title: "是一条流水线，而不是一段提示词",
    body: "所有不能出错的步骤都是普通的、有测试的代码。只有需要判断的地方才交给模型。",
    legend: { code: "确定性代码", model: "模型", planned: "规划中（M2）" },
    stages: [
      {
        name: "Select",
        kind: "code",
        summary: "挑选要审查的文件",
        detail:
          "每个改动文件要么被审查，要么被排除并记录原因：二进制、密钥、生成代码、第三方代码、锁文件或过大。密钥文件永远无法被重新纳入，数据库迁移文件始终会被审查。",
      },
      {
        name: "Triage",
        kind: "code",
        summary: "确定风险档位",
        detail:
          "改动规模和 auth/、crypto/ 这类敏感路径决定一次改动要被审得多仔细。",
      },
      {
        name: "Bundle",
        kind: "model",
        summary: "把相关文件分组",
        detail:
          "由 light 模型按文件编号分组：接口和实现放一起，各语言的翻译文件放一起。答案不合法时会被修补，或者退回按文件逐个审查。",
      },
      {
        name: "Review",
        kind: "model",
        summary: "隔离的 agent 任务",
        detail:
          "每个分组由一个 agent 审查，它只能读取被审查的那个版本，并引用代码而不是猜行号。",
      },
      {
        name: "Anchor",
        kind: "code",
        summary: "解析出准确行号",
        detail:
          "引用的代码依次在改动过的代码段、整个文件、其他改动文件里匹配。任何问题都不会被悄悄丢掉。",
      },
      {
        name: "Verify",
        kind: "planned",
        summary: "逐条事实核查",
        detail: "每条问题都会对照 diff 核查，只删掉能被证明错误的。",
      },
      {
        name: "Judge",
        kind: "planned",
        summary: "去重并给出结论",
        detail:
          "由最强的模型合并不同审查员的重复意见、校准严重程度，并给出最终结论。",
      },
    ],
  },
  features: {
    eyebrow: "为什么选 ocra",
    title: "要的是信号，不是数量",
    items: [
      {
        title: "精确优先",
        body: "审查员明确知道哪些不该报。代码风格的细节、没有依据的推测、与本次改动无关的代码，都不会出现在审查结果里。",
      },
      {
        title: "落在正确的行上",
        body: "模型引用代码，由 ocra 解析位置。没有编造的行号，也不会有评论挂错文件。",
      },
      {
        title: "任意模型，自动降级",
        body: "每个层级配置一条模型链。遇到过载或额度用完就换下一个，反复失败的模型在本次运行里会被跳过。",
      },
      {
        title: "成本看得见",
        body: "输入、输出、推理和缓存 token，以及每次尝试的花费。每个 agent 最多执行 20 步。",
      },
      {
        title: "默认保护隐私",
        body: "你本机的配置、skill 和指令文件永远不会发给模型。工具只读，只在本机提供，并使用每次运行随机生成的密钥。",
      },
      {
        title: "一切皆插件",
        body: "代码托管平台、运行时、审查员、规则包、工具和事件监听，共用同一套插件接口。",
      },
    ],
  },
  anatomy: {
    eyebrow: "一条审查意见的构成",
    title: "每条意见都有据可查",
    body: "每条意见都带着它指向的代码、背后的依据和一个最小修复，你几秒钟就能决定采纳还是忽略。",
    callouts: {
      quote: "agent 引用它所指的代码",
      lines: "ocra 把引用解析成准确的行号",
      evidence: "用只读工具核实过的事实",
      suggestion: "有必要时给出最小修复",
    },
  },
  plugins: {
    eyebrow: "可扩展",
    title: "把团队约定写成插件",
    body: "把架构规范教给审查员、为你的业务领域加一个审查员，或者把事件接入你自己的遥测系统。插件只拿到一套精简、有类型的接口，别的什么也碰不到。",
    points: [
      "bootstrap、configure、postConfigure 三段生命周期",
      "每个插件的设置单独校验",
      "重复注册或越界注册会直接报错",
    ],
    cta: "阅读插件指南",
  },
  roadmap: {
    eyebrow: "路线图",
    title: "ocra 现在走到哪了",
    items: [
      {
        milestone: "M1",
        title: "本地审查 MVP",
        body: "CLI、文件选择、分组、行号定位、correctness 审查员、OpenCode 运行时、插件、评测工具。",
        status: "已完成",
        done: true,
      },
      {
        milestone: "M2",
        title: "多智能体审查",
        body: "安全与性能审查员、审查矩阵、逐条核查、最终裁决和风险分档。",
        status: "下一步",
        done: false,
      },
      {
        milestone: "M3",
        title: "GitHub 集成",
        body: "PR 行内评论、审查结论和增量复审。",
        status: "规划中",
        done: false,
      },
      {
        milestone: "M4",
        title: "生产级加固",
        body: "熔断器、远程配置、审查记忆，以及追求召回率的 --ultra 模式。",
        status: "规划中",
        done: false,
      },
    ],
  },
  start: {
    title: "审查你的第一个改动",
    body: "ocra 在本地对任意 Git 仓库运行。带上一个模型 key 就行：发给模型供应商的，只有被审查的改动和审查员主动请求的文件。",
    copy: "复制",
    copied: "已复制",
    docs: "阅读快速上手",
  },
  footer: {
    tagline: "开源的多智能体代码审查。",
    docs: "文档",
    github: "GitHub",
    license: "Apache-2.0",
    manual: "用户手册",
  },
};

export function getCopy(locale: string): Copy {
  return locale === "zh" ? zh : en;
}
