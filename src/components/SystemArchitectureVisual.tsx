import { useState, useEffect, useRef, memo, useCallback } from "react";
import {
  Terminal as TerminalIcon,
  Play,
  RotateCw,
  Zap,
} from "lucide-react";

/* ─── Custom Sharp Infrastructure SVG Line Icons ──────────────────────────── */

// API Ingress: Sharp microservice cube with ingress vectors
const GatewayIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// Agent Orchestrator: Neural CPU kernel matrix with bus junctions
const OrchestratorIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

// Vector Store: Multi-dimensional node net / embedding manifold
const VectorNetIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <line x1="8" y1="7" x2="10.5" y2="10.5" />
    <line x1="16" y1="7" x2="13.5" y2="10.5" />
    <line x1="8" y1="17" x2="10.5" y2="13.5" />
    <line x1="16" y1="17" x2="13.5" y2="13.5" />
    <line x1="6" y1="8.5" x2="6" y2="15.5" strokeDasharray="2 2" />
    <line x1="18" y1="8.5" x2="18" y2="15.5" strokeDasharray="2 2" />
  </svg>
);

// Database Cluster: Stacked cylindrical disk array with sync links
const DatabaseClusterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <line x1="12" y1="8" x2="12" y2="12" strokeDasharray="1 1" />
  </svg>
);

// Redis Lightning: High-voltage cache bolt
const RedisBoltIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// LLM Inference: Stream token transformer pulse
const LLMStreamIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* ─── Node & Graph Definitions (Clean 3-Column x 2-Tier Topology) ─────────── */

interface NodeItem {
  id: string;
  name: string;
  tag: string;
  type: "gateway" | "orchestrator" | "storage" | "cache" | "inference";
  icon: (props: { className?: string }) => JSX.Element;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  stats: {
    qps: number;
    p99: string;
    mem: string;
  };
  colorTheme: {
    base: string;
    border: string;
    glow: string;
    accent: string;
    badge: string;
  };
}

// Fixed-column positioning prevents horizontal collision:
// Col 1 (x: 18%) | Col 2 (x: 50%) | Col 3 (x: 82%)
// Tier 1 (y: 25%) | Tier 2 (y: 67%)
const NODES: NodeItem[] = [
  {
    id: "gateway",
    name: "API Ingress",
    tag: "FastAPI",
    type: "gateway",
    icon: GatewayIcon,
    x: 18,
    y: 25,
    stats: { qps: 142, p99: "14ms", mem: "38MB" },
    colorTheme: {
      base: "bg-[#11141B]",
      border: "border-slate-500/40 hover:border-slate-400",
      glow: "shadow-[0_0_15px_rgba(138,153,173,0.15)]",
      accent: "text-[#8A99AD]",
      badge: "bg-[#8A99AD]/10 text-[#8A99AD] border-[#8A99AD]/30",
    },
  },
  {
    id: "orchestrator",
    name: "Agent Orchestrator",
    tag: "LangChain",
    type: "orchestrator",
    icon: OrchestratorIcon,
    x: 50,
    y: 25,
    stats: { qps: 84, p99: "22ms", mem: "64MB" },
    colorTheme: {
      base: "bg-[#16120F]",
      border: "border-orange-500/50 hover:border-orange-400",
      glow: "shadow-[0_0_24px_rgba(249,115,22,0.3)]",
      accent: "text-[#F97316]",
      badge: "bg-orange-500/10 text-[#F97316] border-orange-500/30",
    },
  },
  {
    id: "llm",
    name: "LLM Inference",
    tag: "Azure OpenAI",
    type: "inference",
    icon: LLMStreamIcon,
    x: 82,
    y: 25,
    stats: { qps: 42, p99: "48ms", mem: "128MB" },
    colorTheme: {
      base: "bg-[#0E151A]",
      border: "border-cyan-500/40 hover:border-cyan-300",
      glow: "shadow-[0_0_18px_rgba(6,182,212,0.25)]",
      accent: "text-[#06B6D4]",
      badge: "bg-cyan-500/10 text-[#06B6D4] border-cyan-500/30",
    },
  },
  {
    id: "redis",
    name: "Broker & Cache",
    tag: "Redis 7.2",
    type: "cache",
    icon: RedisBoltIcon,
    x: 18,
    y: 67,
    stats: { qps: 310, p99: "0.4ms", mem: "24MB" },
    colorTheme: {
      base: "bg-[#18130B]",
      border: "border-amber-500/40 hover:border-amber-400",
      glow: "shadow-[0_0_18px_rgba(245,158,11,0.25)]",
      accent: "text-[#F59E0B]",
      badge: "bg-amber-500/10 text-[#F59E0B] border-amber-500/30",
    },
  },
  {
    id: "vectordb",
    name: "pgvector Store",
    tag: "Cosine RAG",
    type: "storage",
    icon: VectorNetIcon,
    x: 50,
    y: 67,
    stats: { qps: 92, p99: "12ms", mem: "86MB" },
    colorTheme: {
      base: "bg-[#0B1518]",
      border: "border-cyan-500/50 hover:border-cyan-400",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.25)]",
      accent: "text-[#06B6D4]",
      badge: "bg-cyan-500/10 text-[#06B6D4] border-cyan-500/30",
    },
  },
  {
    id: "postgres",
    name: "Database Cluster",
    tag: "Postgres 16",
    type: "storage",
    icon: DatabaseClusterIcon,
    x: 82,
    y: 67,
    stats: { qps: 180, p99: "1.2ms", mem: "112MB" },
    colorTheme: {
      base: "bg-[#10141C]",
      border: "border-slate-500/40 hover:border-cyan-500/50",
      glow: "shadow-[0_0_15px_rgba(51,65,85,0.25)]",
      accent: "text-[#8A99AD]",
      badge: "bg-slate-700/20 text-[#8A99AD] border-slate-600/30",
    },
  },
];

interface Edge {
  from: string;
  to: string;
  speed: number;
  color: string;
}

const EDGES: Edge[] = [
  // Horizontal bus across Tier 1 (Ingress -> Orchestrator -> LLM)
  { from: "gateway", to: "orchestrator", speed: 0.0035, color: "#8A99AD" },
  { from: "orchestrator", to: "llm", speed: 0.0042, color: "#06B6D4" },
  // Vertical data lanes
  { from: "gateway", to: "redis", speed: 0.0065, color: "#F59E0B" },
  { from: "orchestrator", to: "vectordb", speed: 0.0022, color: "#F97316" },
  { from: "llm", to: "postgres", speed: 0.003, color: "#06B6D4" },
  // Horizontal bus across Tier 2
  { from: "redis", to: "vectordb", speed: 0.005, color: "#F59E0B" },
  { from: "vectordb", to: "postgres", speed: 0.0025, color: "#06B6D4" },
  // Diagonal async dispatch (Redis -> Orchestrator)
  { from: "redis", to: "orchestrator", speed: 0.0045, color: "#F97316" },
];

/* ─── Low-Level Kernel / Telemetry Log Line Interface ─────────────────────── */

interface KernelLog {
  timestamp: string;
  level: "INFO" | "OK" | "WARN" | "TRACE";
  caller: string;
  message: string;
}

const INITIAL_LOGS: KernelLog[] = [
  { timestamp: "0.0042", level: "INFO", caller: "kernel::sys", message: "initializing agent_mesh_v2.4 on ring0" },
  { timestamp: "0.0189", level: "OK", caller: "pgvector", message: "index loaded (1536 dim, cosine, index_size=42MB)" },
  { timestamp: "0.0412", level: "WARN", caller: "ratelimit", message: "client 192.168.1.4 approaching token bucket limit" },
  { timestamp: "0.0890", level: "TRACE", caller: "rpcs3/llm", message: "stream chunk #42 -> 58 tok/s [ttft: 14ms]" },
  { timestamp: "0.1042", level: "OK", caller: "redis::broker", message: "task_queue: batch poll 12 jobs complete (<0.4ms)" },
  { timestamp: "0.1198", level: "INFO", caller: "fastapi::ingress", message: "POST /v1/orchestrate status=200 size=1.8KB" },
];

const SystemArchitectureVisual = () => {
  const [activeTab, setActiveTab] = useState<"architecture" | "terminal">("architecture");
  const [activeNode, setActiveNode] = useState<string | null>("orchestrator");
  const [traceActive, setTraceActive] = useState(false);
  const [activeTraceNode, setActiveTraceNode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [logs, setLogs] = useState<KernelLog[]>(INITIAL_LOGS);
  const [terminalInput, setTerminalInput] = useState("");
  const [coreLoad, setCoreLoad] = useState(1.2);
  const [dynamicStats, setDynamicStats] = useState<Record<string, { qps: number; p99: string; mem: string }>>(() => {
    const init: Record<string, { qps: number; p99: string; mem: string }> = {};
    NODES.forEach((n) => {
      init[n.id] = { ...n.stats };
    });
    return init;
  });

  const [cliHistory, setCliHistory] = useState<string[]>([
    "Industrial Kernel Telemetry v2.4 (x86_64-linux-gnu)",
    "SYS_STATUS: NOMINAL // ALL DISPATCHERS ONLINE",
    "Type 'projects', 'about', or 'help' to navigate.",
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  // Subtle live telemetry fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setCoreLoad(+(1.1 + Math.random() * 0.4).toFixed(1));
      setDynamicStats((prev) => {
        const next = { ...prev };
        NODES.forEach((n) => {
          if (next[n.id]) {
            const jitter = Math.floor(Math.random() * 7) - 3;
            next[n.id] = {
              ...next[n.id],
              qps: Math.max(10, next[n.id].qps + jitter),
            };
          }
        });
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Trigger Interactive Trace Action
  const handleTriggerTrace = useCallback(() => {
    if (traceActive) return;
    setTraceActive(true);

    const sequence = ["gateway", "orchestrator", "vectordb", "postgres"];
    sequence.forEach((nodeId, index) => {
      setTimeout(() => {
        setActiveTraceNode(nodeId);
      }, index * 260);
    });

    setTimeout(() => {
      const now = (performance.now() / 1000).toFixed(4);
      const burstLogs: KernelLog[] = [
        {
          timestamp: now,
          level: "TRACE",
          caller: "trace::burst",
          message: "request_id=0x" + Math.random().toString(16).slice(2, 8) + " injected by operator",
        },
        {
          timestamp: (+now + 0.004).toFixed(4),
          level: "OK",
          caller: "gateway",
          message: "ingress auth_token verified (claims=admin, latency=0.3ms)",
        },
        {
          timestamp: (+now + 0.009).toFixed(4),
          level: "TRACE",
          caller: "orchestrator",
          message: "state_graph: dispatching subagent 'retrieval_agent_v2'",
        },
        {
          timestamp: (+now + 0.018).toFixed(4),
          level: "OK",
          caller: "pgvector",
          message: "nearest embeddings fetched: 4 vectors (similarity=0.941, 12ms)",
        },
        {
          timestamp: (+now + 0.024).toFixed(4),
          level: "OK",
          caller: "kernel::tx",
          message: "trace finalized -> 200 OK (execution_time: 24ms)",
        },
      ];

      setLogs((prev) => [...prev.slice(-8), ...burstLogs]);
      setActiveTraceNode(null);
      setTraceActive(false);

      setToastMessage("⚡ Request execution completed in 24ms");
      setTimeout(() => setToastMessage(null), 3200);
    }, sequence.length * 260 + 200);
  }, [traceActive]);

  // Helper for smooth navigation to page sections without layout distortion
  const scrollToSection = useCallback((id: string) => {
    // Unfocus input so browser does not snap viewport back to terminal
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }, 60);
  }, []);

  // Terminal command handler with real DOM navigation
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "help") {
      response = `AVAILABLE COMMANDS:
  • projects     -> Scroll to Projects section
  • about        -> Scroll to About Me section
  • experience   -> Scroll to Experience timeline
  • stack        -> Scroll to Tech Stack section
  • beyond       -> Scroll to Beyond Engineering
  • recognition  -> Scroll to Recognition section
  • contact      -> Scroll to Contact coordinates
  • skills       -> Dump full Backend & AI stack (JSON)
  • trace        -> Trigger synthetic telemetry burst
  • status       -> Print system & subsystem telemetry
  • clear        -> Wipe terminal screen`;
    } else if (cmd === "project" || cmd === "projects") {
      scrollToSection("projects");
      response = `>> NAVIGATING TO #projects...
Loading production systems & AI pipelines.`;
    } else if (cmd === "about" || cmd === "bio" || cmd === "me") {
      scrollToSection("about");
      response = ">> NAVIGATING TO #about: 'Building Software, One Layer at a Time.'";
    } else if (cmd === "experience" || cmd === "work" || cmd === "internship") {
      scrollToSection("experience");
      response = ">> NAVIGATING TO #experience: Hexaware Technologies, GameChanger4U, Infotak, J7 Tech.";
    } else if (cmd === "stack" || cmd === "tech" || cmd === "techstack") {
      scrollToSection("stack");
      response = ">> NAVIGATING TO #stack: Backend, AI, Databases & Cloud Tools.";
    } else if (cmd === "beyond") {
      scrollToSection("beyond");
      response = ">> NAVIGATING TO #beyond: Leadership, Hackathons & Community.";
    } else if (cmd === "recognition" || cmd === "awards") {
      scrollToSection("recognition");
      response = ">> NAVIGATING TO #recognition: Honors, hackathon wins & milestones.";
    } else if (cmd === "contact" || cmd === "email") {
      scrollToSection("contact");
      response = `>> NAVIGATING TO #contact...
EMAIL:    vishvaak2005@gmail.com
GITHUB:   https://github.com/Vishvaa-K
LINKEDIN: https://linkedin.com/in/vishvaak`;
    } else if (cmd === "skills") {
      response = JSON.stringify(
        {
          backend: ["FastAPI", "Python", "Redis", "PostgreSQL", "Docker", "AWS"],
          ai_systems: ["LangChain", "Azure OpenAI", "pgvector", "RAG Pipelines", "Multi-Agent"],
          architecture: ["Event-Driven", "Microservices", "REST / gRPC", "Async Queues"],
        },
        null,
        2
      );
    } else if (cmd === "status") {
      response = `✓ SYS_STATUS: NOMINAL
• INGRESS: 142 req/s · p99 14ms
• ORCHESTRATOR: ACTIVE (RAG pipeline loaded)
• REDIS: 0.4ms latency · 96% hit ratio
• PGVECTOR: 1536-dim cosine index online
• POSTGRES: WAL sync 0-lag`;
    } else if (cmd === "trace") {
      handleTriggerTrace();
      response = ">> Executing synthetic trace burst through distributed mesh...";
    } else if (cmd === "clear") {
      setCliHistory([]);
      setTerminalInput("");
      return;
    } else {
      response = `kernel: command not found: '${cmd}'. Type 'help' for available commands.`;
    }

    setCliHistory((prev) => [...prev, `$ ${terminalInput}`, response]);
    setTerminalInput("");
  };

  // Only scroll the internal log container, NEVER scroll the window
  useEffect(() => {
    if (activeTab === "terminal" && logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [cliHistory, activeTab]);

  // Canvas drawing for multi-speed data lines
  useEffect(() => {
    if (activeTab !== "architecture") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const render = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      EDGES.forEach((edge, idx) => {
        const fromNode = NODES.find((n) => n.id === edge.from);
        const toNode = NODES.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return;

        const x1 = (fromNode.x / 100) * width;
        const y1 = (fromNode.y / 100) * height;
        const x2 = (toNode.x / 100) * width;
        const y2 = (toNode.y / 100) * height;

        // Base bus circuit line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(51, 65, 85, 0.35)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated pulse dot at individual edge speed
        const progress = (t * edge.speed + idx * 0.22) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = edge.color;
        ctx.shadowColor = edge.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      t += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTab]);

  return (
    <div className="relative w-full rounded-xl border border-slate-700/60 bg-[#08090C] backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col h-[500px] sm:h-[520px] md:h-[540px] font-mono">
      {/* ── Industrial Kernel Header Bar ── */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-slate-800 bg-[#0C0E14] select-none gap-2">
        {/* Status indicator badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse inline-block" />
            <span className="hidden xs:inline">SYS_STATUS:</span>
            <span>NOMINAL</span>
          </div>
          <span className="hidden md:inline text-[11px] text-slate-500 font-mono">
            // LOAD: <strong className="text-orange-400">{coreLoad}%</strong>
          </span>
        </div>

        {/* Tab Switcher: Segmented Dark Metallic Toggle */}
        <div className="flex items-center bg-[#06070A] p-0.5 rounded border border-slate-800 shrink-0">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all rounded-sm ${
              activeTab === "architecture"
                ? "bg-[#141822] text-orange-400 border-b-2 border-orange-500 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="text-[10px] text-slate-500">01</span>
            Mesh Graph
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all rounded-sm ${
              activeTab === "terminal"
                ? "bg-[#141822] text-orange-400 border-b-2 border-orange-500 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            Live Logs
          </button>
        </div>

        {/* Simulate Trace Button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={handleTriggerTrace}
            disabled={traceActive}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-bold text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/40 rounded transition-all active:scale-95 disabled:opacity-50"
            title="Inject synthetic test trace"
          >
            {traceActive ? (
              <RotateCw className="w-3.5 h-3.5 animate-spin text-orange-400" />
            ) : (
              <Play className="w-3 h-3 fill-current text-orange-400" />
            )}
            <span className="hidden sm:inline text-[11px] uppercase tracking-wide">
              Simulate Trace
            </span>
          </button>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="relative flex-1 overflow-hidden">
        {activeTab === "architecture" ? (
          <div className="relative w-full h-full select-none bg-[#08090C]">
            {/* Fine circuit grid background */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(51, 65, 85, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(51, 65, 85, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            {/* HTML5 Canvas for Animated Lines */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Interactive Nodes: Cleanly spaced in 3 columns x 2 rows */}
            {NODES.map((node) => {
              const isSelected = activeNode === node.id;
              const isTraceHighlighted = activeTraceNode === node.id;
              const Icon = node.icon;
              const currentStat = dynamicStats[node.id] || node.stats;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  onMouseEnter={() => setActiveNode(node.id)}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute cursor-pointer transition-all duration-200 z-10 ${
                    isSelected || isTraceHighlighted ? "scale-105 z-20" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-all ${
                      node.colorTheme.base
                    } ${
                      isTraceHighlighted
                        ? "border-orange-400 ring-2 ring-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.6)]"
                        : isSelected
                        ? `${node.colorTheme.border} ${node.colorTheme.glow}`
                        : "border-slate-800/90 hover:border-slate-700"
                    }`}
                  >
                    {/* Infrastructure Icon */}
                    <div className={`p-1.5 rounded ${node.colorTheme.badge} shrink-0`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Node Metadata (Clean Vertical Stack, Zero Overlap) */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5 leading-tight">
                        <span className="text-[11px] font-bold text-slate-200 whitespace-nowrap">
                          {node.name}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-mono mt-0.5">
                        <span className="text-slate-400 whitespace-nowrap">{node.tag}</span>
                        <span className="text-slate-600">·</span>
                        <span className={`${node.colorTheme.accent} whitespace-nowrap`}>{currentStat.p99}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Live Telemetry Inspection Bar */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 sm:p-2.5 rounded-lg bg-[#0C0E14]/95 border border-slate-800 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-xs">
              {activeNode ? (
                (() => {
                  const node = NODES.find((n) => n.id === activeNode) || NODES[0];
                  const stat = dynamicStats[node.id] || node.stats;
                  return (
                    <>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          {node.type}
                        </span>
                        <span className="font-bold text-slate-200">{node.name}</span>
                        <span className="text-slate-600 hidden xs:inline">|</span>
                        <span className="text-slate-400 text-[11px] font-mono hidden xs:inline">
                          throughput: <strong className="text-cyan-400">{stat.qps} qps</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[11px] font-mono text-slate-400">
                        <span>p99: <strong className="text-orange-400">{stat.p99}</strong></span>
                        <span>mem: <strong className="text-slate-300">{stat.mem}</strong></span>
                        <span className="text-emerald-400 font-bold">200 OK</span>
                      </div>
                    </>
                  );
                })()
              ) : (
                <span className="text-slate-500 text-xs">
                  Hover or select an infrastructure node to inspect live kernel telemetry.
                </span>
              )}
            </div>
          </div>
        ) : (
          /* Live Kernel Terminal Log & Interactive Shell */
          <div className="relative flex flex-col h-full bg-[#06070A] p-3 sm:p-4 font-mono text-xs overflow-hidden">
            {/* Subtle CRT Scanline Overlay (~2% opacity) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03] z-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 2px)",
              }}
            />

            {/* Log Stream */}
            <div ref={logContainerRef} className="relative z-0 flex-1 overflow-y-auto space-y-1.5 pr-1.5 custom-scrollbar">
              {logs.map((log, index) => (
                <div key={index} className="flex flex-wrap sm:flex-nowrap items-baseline gap-x-2 gap-y-0.5 leading-relaxed text-[11px]">
                  {/* Timestamp in muted dark slate */}
                  <span className="text-[#475569] shrink-0 font-mono">
                    [{log.timestamp}]
                  </span>

                  {/* Level indicator with Industrial Color Hierarchy */}
                  <span
                    className={`font-bold shrink-0 ${
                      log.level === "INFO"
                        ? "text-[#06B6D4]" // Cool Cyan
                        : log.level === "OK"
                        ? "text-[#22C55E]" // Muted Terminal Green
                        : log.level === "WARN"
                        ? "text-[#F59E0B]" // Burnt Amber
                        : "text-[#F97316]" // Warm Ochre
                    }`}
                  >
                    [{log.level}]
                  </span>

                  {/* Caller subsystem */}
                  <span className="text-slate-400 shrink-0 font-semibold">{log.caller}:</span>

                  {/* Message */}
                  <span className="text-slate-300 break-words">{log.message}</span>
                </div>
              ))}

              <div className="border-t border-slate-800 my-2 pt-2" />

              {/* CLI Command History */}
              {cliHistory.map((line, idx) => (
                <div
                  key={`cli-${idx}`}
                  className={`text-[11px] whitespace-pre-wrap ${
                    line.startsWith("$")
                      ? "text-orange-400 font-bold"
                      : "text-slate-400"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Interactive Shell Prompt */}
            <form
              onSubmit={handleCommandSubmit}
              className="relative z-0 mt-2 pt-2 border-t border-slate-800/80 flex items-center gap-2"
            >
              <span className="text-orange-400 font-bold text-xs shrink-0">
                vishvaa@kernel:~$
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="try 'projects', 'about', 'experience', 'skills', or 'help'..."
                className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 font-mono text-xs"
              />
            </form>
          </div>
        )}

        {/* Toast Metric Notification for Simulated Trace */}
        {toastMessage && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded bg-[#16120F] border border-orange-500/60 text-orange-300 text-xs font-mono font-semibold shadow-lg shadow-orange-950/50 flex items-center gap-2 animate-fade-in">
            <Zap className="w-3.5 h-3.5 text-orange-400 fill-current" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(SystemArchitectureVisual);
