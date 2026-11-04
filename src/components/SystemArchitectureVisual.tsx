import { useState, useEffect, useRef, memo, useCallback, useMemo } from "react";
import {
  Terminal as TerminalIcon,
  Play,
  RotateCw,
  Zap,
} from "lucide-react";
import { useTheme } from "@/contexts/theme-provider";
import type { NodeColorTheme } from "@/config/themes";

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

// Vector DB: Multidimensional graph lattice node
const VectorNetIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <line x1="8.5" y1="6" x2="15.5" y2="6" />
    <line x1="6" y1="8.5" x2="6" y2="15.5" />
    <line x1="8.5" y1="18" x2="15.5" y2="18" />
    <line x1="18" y1="8.5" x2="18" y2="15.5" />
    <line x1="7.7" y1="7.7" x2="16.3" y2="16.3" strokeDasharray="2 2" />
  </svg>
);

// Postgres: Industrial ACID disk stack
const DatabaseClusterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
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

export interface NodeItem {
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
  colorTheme: NodeColorTheme;
}

export interface Edge {
  from: string;
  to: string;
  speed: number;
  color: string;
}

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
  const { theme, activePreset } = useTheme();
  const [activeTab, setActiveTab] = useState<"architecture" | "terminal">("architecture");
  const [activeNode, setActiveNode] = useState<string | null>("orchestrator");
  const [traceActive, setTraceActive] = useState(false);
  const [activeTraceNode, setActiveTraceNode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [logs, setLogs] = useState<KernelLog[]>(INITIAL_LOGS);
  const [terminalInput, setTerminalInput] = useState("");
  const [coreLoad, setCoreLoad] = useState(1.2);

  const isDark = theme === "dark" || (theme === "system" && (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches));
  const meshTokens = isDark ? activePreset.dark.mesh : activePreset.light.mesh;

  const nodes: NodeItem[] = useMemo(() => [
    {
      id: "gateway",
      name: "API Ingress",
      tag: "FastAPI",
      type: "gateway",
      icon: GatewayIcon,
      x: 18,
      y: 25,
      stats: { qps: 142, p99: "14ms", mem: "38MB" },
      colorTheme: meshTokens.gateway,
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
      colorTheme: meshTokens.orchestrator,
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
      colorTheme: meshTokens.llm,
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
      colorTheme: meshTokens.redis,
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
      colorTheme: meshTokens.vectordb,
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
      colorTheme: meshTokens.postgres,
    },
  ], [meshTokens]);

  const edges: Edge[] = useMemo(() => [
    { from: "gateway", to: "orchestrator", speed: 0.0035, color: meshTokens.edgeFast },
    { from: "orchestrator", to: "llm", speed: 0.0042, color: meshTokens.edgeSlow },
    { from: "gateway", to: "redis", speed: 0.0065, color: meshTokens.edgeFast },
    { from: "orchestrator", to: "vectordb", speed: 0.0022, color: meshTokens.edgeSlow },
    { from: "llm", to: "postgres", speed: 0.003, color: meshTokens.edgeSlow },
    { from: "redis", to: "vectordb", speed: 0.005, color: meshTokens.edgeFast },
    { from: "vectordb", to: "postgres", speed: 0.0025, color: meshTokens.edgeSlow },
    { from: "redis", to: "orchestrator", speed: 0.0045, color: meshTokens.edgeFast },
  ], [meshTokens]);

  const [dynamicStats, setDynamicStats] = useState<Record<string, { qps: number; p99: string; mem: string }>>(() => {
    const init: Record<string, { qps: number; p99: string; mem: string }> = {};
    nodes.forEach((n) => {
      init[n.id] = { ...n.stats };
    });
    return init;
  });

  const [cliHistory, setCliHistory] = useState<string[]>([
    "Industrial Kernel Telemetry v2.5 (x86_64-linux-gnu)",
    "SYS_STATUS: NOMINAL // ALL DISPATCHERS ONLINE",
    "SYSTEM THEME: Industrial Cyber [LOCKED]",
    "Type 'projects', 'about', 'skills', or 'help' to navigate.",
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  // Subtle live telemetry fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setCoreLoad(+(1.1 + Math.random() * 0.4).toFixed(1));
      setDynamicStats((prev) => {
        const next = { ...prev };
        nodes.forEach((n) => {
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
  }, [nodes]);

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

      // Trigger metric toast notification
      setToastMessage("TRACE COMPLETED: 24ms · 4 HOPS · 200 OK");
      setTimeout(() => {
        setToastMessage(null);
        setTraceActive(false);
      }, 2200);
    }, sequence.length * 260 + 200);
  }, [traceActive]);

  // Helper for smooth navigation to page sections without layout distortion
  const scrollToSection = useCallback((id: string) => {
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

  // Terminal command handler with real DOM navigation and theme switching
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
    } else if (cmd === "theme" || cmd === "themes" || cmd.startsWith("theme ")) {
      response = `SYSTEM THEME: Industrial Cyber [LOCKED]
System aesthetics are permanently locked to Industrial Cyber.`;
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
  }, [logs, cliHistory, activeTab]);

  // Canvas Dynamic Circuit Wire & Data Particle Pulse Renderer
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

      edges.forEach((edge, idx) => {
        const fromNode = nodes.find((n) => n.id === edge.from);
        const toNode = nodes.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return;

        const x1 = (fromNode.x / 100) * width;
        const y1 = (fromNode.y / 100) * height;
        const x2 = (toNode.x / 100) * width;
        const y2 = (toNode.y / 100) * height;

        // Base bus circuit line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(130, 145, 163, 0.18)";
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
  }, [activeTab, edges, nodes]);

  return (
    <div className="relative w-full rounded-xl border border-[var(--border-primary)] bg-[var(--bg-terminal)] backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col h-[500px] sm:h-[520px] md:h-[540px] font-mono">
      {/* ── Industrial Kernel Header Bar ── */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-[var(--border-primary)] bg-[var(--bg-secondary)] select-none gap-2">
        {/* Status indicator badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--status-success)]/10 border border-[var(--status-success)]/30 text-[10px] text-[var(--status-success)] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-[var(--status-success)] animate-pulse inline-block rounded-full" />
            <span className="hidden xs:inline">SYS_STATUS:</span>
            <span>NOMINAL</span>
          </div>
          <span className="hidden md:inline text-[11px] text-[var(--text-muted)] font-mono">
            // LOAD: <strong className="text-[var(--accent-primary)]">{coreLoad}%</strong>
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-[var(--bg-terminal)] p-0.5 rounded border border-[var(--border-primary)] shrink-0">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all rounded-sm ${
              activeTab === "architecture"
                ? "bg-[var(--bg-elevated)] text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)] shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <span className="text-[10px] text-[var(--text-muted)]">01</span>
            Mesh Graph
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all rounded-sm ${
              activeTab === "terminal"
                ? "bg-[var(--bg-elevated)] text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)] shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-bold text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20 border border-[var(--accent-primary)]/30 rounded transition-all active:scale-95 disabled:opacity-50"
            title="Inject synthetic test trace"
          >
            {traceActive ? (
              <RotateCw className="w-3.5 h-3.5 animate-spin text-[var(--accent-primary)]" />
            ) : (
              <Play className="w-3 h-3 fill-current text-[var(--accent-primary)]" />
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
          <div className="relative w-full h-full select-none bg-[var(--bg-terminal)]">
            {/* Fine circuit grid background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(146, 158, 172, 0.18) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(146, 158, 172, 0.18) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            {/* HTML5 Canvas for Animated Lines */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Interactive Nodes: Cleanly spaced in 3 columns x 2 rows */}
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              const isTraceHighlighted = activeTraceNode === node.id;
              const currentStat = dynamicStats[node.id] || node.stats;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  style={{
                    position: "absolute",
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`cursor-pointer transition-all duration-300 z-10 ${
                    isSelected || isTraceHighlighted ? "scale-105 z-20" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-all ${
                      node.colorTheme.base
                    } ${
                      isTraceHighlighted
                        ? "border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/40 shadow-[var(--shadow-glow)]"
                        : isSelected
                        ? `${node.colorTheme.border} ${node.colorTheme.glow}`
                        : "border-[var(--border-primary)] hover:border-[var(--border-hover)]"
                    }`}
                  >
                    {/* Infrastructure Icon */}
                    <div className={`p-1.5 rounded ${node.colorTheme.badge} shrink-0`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Node Metadata (Clean Vertical Stack, Zero Overlap) */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] sm:text-xs font-bold text-[var(--text-primary)] leading-none tracking-tight whitespace-nowrap">
                          {node.name}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-success)] animate-pulse" />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] text-[var(--text-secondary)] font-mono mt-0.5">
                        <span className="text-[var(--text-muted)] whitespace-nowrap">{node.tag}</span>
                        <span className="text-[var(--text-disabled)]">·</span>
                        <span className={`${node.colorTheme.accent} whitespace-nowrap`}>{currentStat.p99}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Live Telemetry Inspection Bar */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 sm:p-2.5 rounded-lg bg-[var(--bg-secondary)]/95 border border-[var(--border-primary)] backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-xs">
              {activeNode ? (
                (() => {
                  const node = nodes.find((n) => n.id === activeNode) || nodes[0];
                  const stat = dynamicStats[node.id] || node.stats;
                  return (
                    <>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/25">
                          {node.type}
                        </span>
                        <span className="font-bold text-[var(--text-primary)]">{node.name}</span>
                        <span className="text-[var(--text-disabled)] hidden xs:inline">|</span>
                        <span className="text-[var(--text-secondary)] text-[11px] font-mono hidden xs:inline">
                          throughput: <strong className="text-[var(--accent-teal)]">{stat.qps} qps</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[11px] font-mono text-[var(--text-secondary)]">
                        <span>p99: <strong className="text-[var(--accent-primary)]">{stat.p99}</strong></span>
                        <span>mem: <strong className="text-[var(--text-primary)]">{stat.mem}</strong></span>
                        <span className="text-[var(--status-success)] font-bold">200 OK</span>
                      </div>
                    </>
                  );
                })()
              ) : (
                <span className="text-[var(--text-muted)] text-xs">
                  Hover or select an infrastructure node to inspect live kernel telemetry.
                </span>
              )}
            </div>
          </div>
        ) : (
          /* Live Kernel Terminal Log & Interactive Shell */
          <div className="relative flex flex-col h-full bg-[var(--bg-terminal)] p-3 sm:p-4 font-mono text-xs overflow-hidden">
            {/* Subtle CRT Scanline Overlay (~2% opacity) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.02] z-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 2px)",
              }}
            />

            {/* Log Stream */}
            <div ref={logContainerRef} className="relative z-0 flex-1 overflow-y-auto space-y-1.5 pr-1.5 custom-scrollbar">
              {logs.map((log, index) => (
                <div key={index} className="flex flex-wrap sm:flex-nowrap items-baseline gap-x-2 gap-y-0.5 leading-relaxed text-[11px]">
                  {/* Timestamp in muted dim phosphor */}
                  <span className="text-[var(--text-disabled)] shrink-0 font-mono">
                    [{log.timestamp}]
                  </span>

                  {/* Level indicator */}
                  <span
                    className={`font-bold shrink-0 ${
                      log.level === "INFO"
                        ? "text-[var(--accent-teal)]"
                        : log.level === "OK"
                        ? "text-[var(--status-success)]"
                        : log.level === "WARN"
                        ? "text-[var(--status-warning)]"
                        : "text-[var(--status-info)]"
                    }`}
                  >
                    [{log.level}]
                  </span>

                  {/* Caller subsystem */}
                  <span className="text-[var(--text-secondary)] shrink-0 font-semibold">{log.caller}:</span>

                  {/* Message */}
                  <span className="text-[var(--text-primary)]/90 break-words">{log.message}</span>
                </div>
              ))}

              <div className="border-t border-[var(--border-primary)] my-2 pt-2" />

              {/* CLI Command History */}
              {cliHistory.map((line, idx) => (
                <div
                  key={`cli-${idx}`}
                  className={`text-[11px] whitespace-pre-wrap ${
                    line.startsWith("$")
                      ? "text-[var(--accent-primary)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Interactive Shell Prompt */}
            <form
              onSubmit={handleCommandSubmit}
              className="relative z-0 mt-2 pt-2 border-t border-[var(--border-primary)] flex items-center gap-2"
            >
              <span className="text-[var(--accent-primary)] font-bold text-xs shrink-0">
                vishvaa@kernel:~$
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="try 'theme', 'projects', 'about', or 'help'..."
                className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] font-mono text-xs"
              />
            </form>
          </div>
        )}

        {/* Toast Metric Notification for Simulated Trace */}
        {toastMessage && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/50 text-[var(--text-primary)] text-xs font-mono font-semibold shadow-lg shadow-black/50 flex items-center gap-2 animate-fade-in">
            <Zap className="w-3.5 h-3.5 text-[var(--accent-primary)] fill-current" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(SystemArchitectureVisual);
