export interface NodeColorTheme {
  base: string;
  border: string;
  glow: string;
  accent: string;
  badge: string;
}

export interface ThemeTokens {
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  bgElevated: string;
  bgTerminal: string;

  borderPrimary: string;
  borderSecondary: string;
  borderSubtle: string;
  borderHover: string;

  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textDisabled: string;

  accentPrimary: string;
  accentHover: string;
  accentStrong: string;
  accentSubtle: string;
  accentBorder: string;

  accentTertiary: string; // Matrix Green or Cool Teal
  accentTertiaryHover: string;
  accentTertiarySubtle: string;
  accentTertiaryBorder: string;

  statusSuccess: string;
  statusWarning: string;
  statusError: string;
  statusInfo: string;

  // HSL values for Tailwind core classes
  hslBackground: string;
  hslForeground: string;
  hslCard: string;
  hslCardForeground: string;
  hslPopover: string;
  hslPopoverForeground: string;
  hslPrimary: string;
  hslPrimaryForeground: string;
  hslSecondary: string;
  hslSecondaryForeground: string;
  hslMuted: string;
  hslMutedForeground: string;
  hslAccent: string;
  hslAccentForeground: string;
  hslDestructive: string;
  hslDestructiveForeground: string;
  hslBorder: string;
  hslInput: string;
  hslRing: string;

  gradientHero: string;
  gradientCard: string;
  gradientName: string;
  shadowGlow: string;
  shadowCard: string;
  shadowSoft: string;
  shadowHover: string;
  glowPrimary: string;
  glowSecondary: string;

  // Mesh visualizer nodes
  mesh: {
    gateway: NodeColorTheme;
    orchestrator: NodeColorTheme;
    llm: NodeColorTheme;
    redis: NodeColorTheme;
    vectordb: NodeColorTheme;
    postgres: NodeColorTheme;
    edgeFast: string;
    edgeSlow: string;
  };
}

export interface ThemePreset {
  id: string;
  name: string;
  badge: string;
  description: string;
  dark: ThemeTokens;
  light: ThemeTokens;
}

export const THEME_PRESETS: ThemePreset[] = [
  /* ── 1. PHOSPHOR MATRIX / TERMINAL AMBER (DEFAULT & ACTIVE) ── */
  {
    id: "matrix",
    name: "Phosphor Matrix",
    badge: "Matrix & Amber",
    description: "Pitch obsidian, phosphor green accents, and glowing terminal amber telemetry.",
    dark: {
      bgPrimary: "#040705",
      bgSecondary: "#090E0B",
      bgTertiary: "#0D140F",
      bgElevated: "#131C16",
      bgTerminal: "#040705",

      borderPrimary: "#16221A",
      borderSecondary: "#223327",
      borderSubtle: "rgba(255, 255, 255, 0.05)",
      borderHover: "#2E4735",

      textPrimary: "#ECFDF5",
      textSecondary: "#8EA898",
      textMuted: "#708A79",
      textDisabled: "#3A4D41",

      accentPrimary: "#F59E0B",
      accentHover: "#FBBF24",
      accentStrong: "#D97706",
      accentSubtle: "rgba(245, 158, 11, 0.12)",
      accentBorder: "rgba(245, 158, 11, 0.30)",

      accentTertiary: "#10B981",
      accentTertiaryHover: "#34D399",
      accentTertiarySubtle: "rgba(16, 185, 129, 0.10)",
      accentTertiaryBorder: "rgba(16, 185, 129, 0.28)",

      statusSuccess: "#22C55E",
      statusWarning: "#F59E0B",
      statusError: "#EF4444",
      statusInfo: "#708A79",

      hslBackground: "140 27% 2%",      // #040705
      hslForeground: "150 75% 96%",     // #ECFDF5
      hslCard: "144 22% 5%",            // #090E0B
      hslCardForeground: "150 75% 96%",
      hslPopover: "142 19% 9%",         // #131C16
      hslPopoverForeground: "150 75% 96%",
      hslPrimary: "38 92% 50%",         // #F59E0B Terminal Amber
      hslPrimaryForeground: "140 27% 2%",
      hslSecondary: "143 20% 6%",       // #0D140F
      hslSecondaryForeground: "150 75% 96%",
      hslMuted: "143 20% 6%",
      hslMutedForeground: "143 14% 61%", // #8EA898
      hslAccent: "160 84% 39%",         // #10B981 Matrix Green
      hslAccentForeground: "140 27% 2%",
      hslDestructive: "0 84% 60%",
      hslDestructiveForeground: "150 75% 96%",
      hslBorder: "140 21% 11%",         // #16221A
      hslInput: "140 21% 11%",
      hslRing: "38 92% 50%",

      gradientHero: `radial-gradient(ellipse at 32% 5%, rgba(245, 158, 11, 0.08), transparent 48%), radial-gradient(ellipse at 5% 48%, rgba(16, 185, 129, 0.06), transparent 42%), #040705`,
      gradientCard: `linear-gradient(180deg, rgba(22, 34, 26, 0.6) 0%, rgba(9, 14, 11, 0.9) 100%)`,
      gradientName: `linear-gradient(115deg, #F59E0B 0%, #FBBF24 35%, #FDE68A 70%, #F59E0B 100%)`,
      shadowGlow: `0 0 50px rgba(245, 158, 11, 0.25)`,
      shadowCard: `0 8px 32px rgba(0, 0, 0, 0.65)`,
      shadowSoft: `0 4px 20px rgba(0, 0, 0, 0.45)`,
      shadowHover: `0 0 25px rgba(245, 158, 11, 0.22)`,
      glowPrimary: `rgba(245, 158, 11, 0.15)`,
      glowSecondary: `rgba(16, 185, 129, 0.12)`,

      mesh: {
        gateway: {
          base: "bg-[#090E0B]",
          border: "border-[#16221A] hover:border-[#223327]",
          glow: "shadow-[0_0_14px_rgba(112,138,121,0.16)]",
          accent: "text-[#708A79]",
          badge: "bg-[#708A79]/10 text-[#708A79] border-[#708A79]/25",
        },
        orchestrator: {
          base: "bg-[#131C16]",
          border: "border-[#F59E0B]/50 hover:border-[#F59E0B]",
          glow: "shadow-[0_0_24px_rgba(245,158,11,0.30)]",
          accent: "text-[#F59E0B]",
          badge: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30",
        },
        llm: {
          base: "bg-[#090E0B]",
          border: "border-[#10B981]/40 hover:border-[#10B981]",
          glow: "shadow-[0_0_18px_rgba(16,185,129,0.22)]",
          accent: "text-[#10B981]",
          badge: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25",
        },
        redis: {
          base: "bg-[#0D140F]",
          border: "border-[#D97706]/45 hover:border-[#FBBF24]",
          glow: "shadow-[0_0_18px_rgba(217,119,6,0.24)]",
          accent: "text-[#FBBF24]",
          badge: "bg-[#D97706]/10 text-[#FBBF24] border-[#D97706]/30",
        },
        vectordb: {
          base: "bg-[#090E0B]",
          border: "border-[#10B981]/45 hover:border-[#10B981]",
          glow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
          accent: "text-[#10B981]",
          badge: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25",
        },
        postgres: {
          base: "bg-[#090E0B]",
          border: "border-[#16221A] hover:border-[#223327]",
          glow: "shadow-[0_0_14px_rgba(112,138,121,0.16)]",
          accent: "text-[#708A79]",
          badge: "bg-[#708A79]/10 text-[#708A79] border-[#708A79]/25",
        },
        edgeFast: "#F59E0B",
        edgeSlow: "#10B981",
      },
    },
    light: {
      bgPrimary: "#F2F5F3",
      bgSecondary: "#FFFFFF",
      bgTertiary: "#E7ECE9",
      bgElevated: "#FFFFFF",
      bgTerminal: "#E7ECE9",

      borderPrimary: "#D1DCD5",
      borderSecondary: "#C2D0C7",
      borderSubtle: "rgba(0, 0, 0, 0.06)",
      borderHover: "#A4B7AC",

      textPrimary: "#0D1812",
      textSecondary: "#3F5246",
      textMuted: "#5E7366",
      textDisabled: "#8BA092",

      accentPrimary: "#D97706",
      accentHover: "#B45309",
      accentStrong: "#92400E",
      accentSubtle: "rgba(217, 119, 6, 0.10)",
      accentBorder: "rgba(217, 119, 6, 0.25)",

      accentTertiary: "#059669",
      accentTertiaryHover: "#047857",
      accentTertiarySubtle: "rgba(5, 150, 105, 0.10)",
      accentTertiaryBorder: "rgba(5, 150, 105, 0.25)",

      statusSuccess: "#059669",
      statusWarning: "#D97706",
      statusError: "#DC2626",
      statusInfo: "#3F5246",

      hslBackground: "140 12% 95%",      // #F2F5F3
      hslForeground: "144 30% 7%",       // #0D1812
      hslCard: "0 0% 100%",
      hslCardForeground: "144 30% 7%",
      hslPopover: "0 0% 100%",
      hslPopoverForeground: "144 30% 7%",
      hslPrimary: "32 95% 44%",          // #D97706
      hslPrimaryForeground: "0 0% 100%",
      hslSecondary: "142 12% 91%",
      hslSecondaryForeground: "144 30% 7%",
      hslMuted: "142 12% 91%",
      hslMutedForeground: "142 13% 28%",
      hslAccent: "160 84% 30%",          // #059669
      hslAccentForeground: "0 0% 100%",
      hslDestructive: "0 72% 51%",
      hslDestructiveForeground: "0 0% 100%",
      hslBorder: "142 15% 84%",          // #D1DCD5
      hslInput: "142 15% 84%",
      hslRing: "32 95% 44%",

      gradientHero: `radial-gradient(ellipse at 32% 5%, rgba(217, 119, 6, 0.08), transparent 48%), #F2F5F3`,
      gradientCard: `linear-gradient(180deg, #FFFFFF 0%, #F2F5F3 100%)`,
      gradientName: `linear-gradient(115deg, #D97706 0%, #B45309 45%, #78350F 100%)`,
      shadowGlow: `0 0 35px rgba(217, 119, 6, 0.15)`,
      shadowCard: `0 8px 24px rgba(13, 24, 18, 0.06)`,
      shadowSoft: `0 4px 14px rgba(13, 24, 18, 0.04)`,
      shadowHover: `0 0 20px rgba(217, 119, 6, 0.18)`,
      glowPrimary: `rgba(217, 119, 6, 0.08)`,
      glowSecondary: `rgba(5, 150, 105, 0.06)`,

      mesh: {
        gateway: {
          base: "bg-[#FFFFFF]",
          border: "border-[#D1DCD5]",
          glow: "shadow-sm",
          accent: "text-[#3F5246]",
          badge: "bg-[#3F5246]/10 text-[#3F5246] border-[#3F5246]/20",
        },
        orchestrator: {
          base: "bg-[#FFFFFF]",
          border: "border-[#D97706]/40",
          glow: "shadow-[0_0_15px_rgba(217,119,6,0.18)]",
          accent: "text-[#D97706]",
          badge: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/25",
        },
        llm: {
          base: "bg-[#FFFFFF]",
          border: "border-[#059669]/30",
          glow: "shadow-sm",
          accent: "text-[#059669]",
          badge: "bg-[#059669]/10 text-[#059669] border-[#059669]/20",
        },
        redis: {
          base: "bg-[#FFFFFF]",
          border: "border-[#D97706]/30",
          glow: "shadow-sm",
          accent: "text-[#D97706]",
          badge: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20",
        },
        vectordb: {
          base: "bg-[#FFFFFF]",
          border: "border-[#059669]/30",
          glow: "shadow-sm",
          accent: "text-[#059669]",
          badge: "bg-[#059669]/10 text-[#059669] border-[#059669]/20",
        },
        postgres: {
          base: "bg-[#FFFFFF]",
          border: "border-[#D1DCD5]",
          glow: "shadow-sm",
          accent: "text-[#3F5246]",
          badge: "bg-[#3F5246]/10 text-[#3F5246] border-[#3F5246]/20",
        },
        edgeFast: "#D97706",
        edgeSlow: "#059669",
      },
    },
  },

  /* ── 2. WARM GRAPHITE & REFINED COPPER ── */
  {
    id: "copper",
    name: "Warm Copper",
    badge: "Graphite & Copper",
    description: "Deep warm graphite with understated copper highlights and muted teal intelligence nodes.",
    dark: {
      bgPrimary: "#0E1116",
      bgSecondary: "#171C23",
      bgTertiary: "#1B2129",
      bgElevated: "#202731",
      bgTerminal: "#0A0D11",

      borderPrimary: "#2A333E",
      borderSecondary: "#35414E",
      borderSubtle: "rgba(255, 255, 255, 0.07)",
      borderHover: "#485768",

      textPrimary: "#F5F2EC",
      textSecondary: "#B8C1CC",
      textMuted: "#929EAC",
      textDisabled: "#657280",

      accentPrimary: "#E69A63",
      accentHover: "#F0AD78",
      accentStrong: "#C87945",
      accentSubtle: "rgba(230, 154, 99, 0.10)",
      accentBorder: "rgba(230, 154, 99, 0.30)",

      accentTertiary: "#83C4CC",
      accentTertiaryHover: "#9BD3DB",
      accentTertiarySubtle: "rgba(131, 196, 204, 0.09)",
      accentTertiaryBorder: "rgba(131, 196, 204, 0.25)",

      statusSuccess: "#83B89A",
      statusWarning: "#D6AC72",
      statusError: "#D77D7D",
      statusInfo: "#91A6BA",

      hslBackground: "218 22% 7%",
      hslForeground: "43 27% 94%",
      hslCard: "215 20% 12%",
      hslCardForeground: "43 27% 94%",
      hslPopover: "215 21% 16%",
      hslPopoverForeground: "43 27% 94%",
      hslPrimary: "25 74% 65%",
      hslPrimaryForeground: "218 22% 7%",
      hslSecondary: "214 20% 14%",
      hslSecondaryForeground: "43 27% 94%",
      hslMuted: "214 20% 14%",
      hslMutedForeground: "214 16% 76%",
      hslAccent: "187 42% 66%",
      hslAccentForeground: "218 22% 7%",
      hslDestructive: "0 54% 67%",
      hslDestructiveForeground: "43 27% 94%",
      hslBorder: "213 19% 21%",
      hslInput: "213 19% 21%",
      hslRing: "25 74% 65%",

      gradientHero: `radial-gradient(ellipse at 32% 5%, rgba(230, 154, 99, 0.06), transparent 48%), radial-gradient(ellipse at 5% 48%, rgba(131, 196, 204, 0.04), transparent 42%), #0E1116`,
      gradientCard: `linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.008) 100%)`,
      gradientName: `linear-gradient(110deg, #E69A63 0%, #D49A79 55%, #83C4CC 100%)`,
      shadowGlow: `0 0 35px rgba(230, 154, 99, 0.18)`,
      shadowCard: `0 8px 30px rgba(0, 0, 0, 0.40)`,
      shadowSoft: `0 4px 20px rgba(0, 0, 0, 0.30)`,
      shadowHover: `0 0 20px rgba(230, 154, 99, 0.22)`,
      glowPrimary: `rgba(230, 154, 99, 0.08)`,
      glowSecondary: `rgba(131, 196, 204, 0.05)`,

      mesh: {
        gateway: {
          base: "bg-[#171C23]",
          border: "border-[#2A333E] hover:border-[#35414E]",
          glow: "shadow-[0_0_12px_rgba(145,166,186,0.12)]",
          accent: "text-[#91A6BA]",
          badge: "bg-[#91A6BA]/10 text-[#91A6BA] border-[#91A6BA]/25",
        },
        orchestrator: {
          base: "bg-[#202731]",
          border: "border-[#E69A63]/40 hover:border-[#E69A63]",
          glow: "shadow-[0_0_20px_rgba(230,154,99,0.22)]",
          accent: "text-[#E69A63]",
          badge: "bg-[#E69A63]/10 text-[#E69A63] border-[#E69A63]/30",
        },
        llm: {
          base: "bg-[#171C23]",
          border: "border-[#83C4CC]/35 hover:border-[#83C4CC]",
          glow: "shadow-[0_0_16px_rgba(131,196,204,0.18)]",
          accent: "text-[#83C4CC]",
          badge: "bg-[#83C4CC]/10 text-[#83C4CC] border-[#83C4CC]/25",
        },
        redis: {
          base: "bg-[#1B2129]",
          border: "border-[#C87945]/35 hover:border-[#C87945]",
          glow: "shadow-[0_0_16px_rgba(200,121,69,0.18)]",
          accent: "text-[#C87945]",
          badge: "bg-[#C87945]/10 text-[#C87945] border-[#C87945]/30",
        },
        vectordb: {
          base: "bg-[#171C23]",
          border: "border-[#83C4CC]/40 hover:border-[#83C4CC]",
          glow: "shadow-[0_0_18px_rgba(131,196,204,0.20)]",
          accent: "text-[#83C4CC]",
          badge: "bg-[#83C4CC]/10 text-[#83C4CC] border-[#83C4CC]/25",
        },
        postgres: {
          base: "bg-[#171C23]",
          border: "border-[#2A333E] hover:border-[#35414E]",
          glow: "shadow-[0_0_12px_rgba(145,166,186,0.12)]",
          accent: "text-[#91A6BA]",
          badge: "bg-[#91A6BA]/10 text-[#91A6BA] border-[#91A6BA]/25",
        },
        edgeFast: "#E69A63",
        edgeSlow: "#83C4CC",
      },
    },
    light: {
      bgPrimary: "#F5F3EF",
      bgSecondary: "#FFFFFF",
      bgTertiary: "#EFEBE5",
      bgElevated: "#FFFFFF",
      bgTerminal: "#EFEBE5",

      borderPrimary: "#E3DED6",
      borderSecondary: "#D6CFC5",
      borderSubtle: "rgba(0, 0, 0, 0.06)",
      borderHover: "#B8B0A2",

      textPrimary: "#20242A",
      textSecondary: "#535D68",
      textMuted: "#7C858F",
      textDisabled: "#A1A8B0",

      accentPrimary: "#A85D32",
      accentHover: "#8E4C28",
      accentStrong: "#723C1E",
      accentSubtle: "rgba(168, 93, 50, 0.08)",
      accentBorder: "rgba(168, 93, 50, 0.25)",

      accentTertiary: "#397F8A",
      accentTertiaryHover: "#2E6871",
      accentTertiarySubtle: "rgba(57, 127, 138, 0.08)",
      accentTertiaryBorder: "rgba(57, 127, 138, 0.22)",

      statusSuccess: "#397B5C",
      statusWarning: "#98651F",
      statusError: "#B34F4F",
      statusInfo: "#535D68",

      hslBackground: "40 18% 95%",
      hslForeground: "216 14% 15%",
      hslCard: "0 0% 100%",
      hslCardForeground: "216 14% 15%",
      hslPopover: "0 0% 100%",
      hslPopoverForeground: "216 14% 15%",
      hslPrimary: "22 54% 43%",
      hslPrimaryForeground: "0 0% 100%",
      hslSecondary: "40 18% 91%",
      hslSecondaryForeground: "216 14% 15%",
      hslMuted: "40 18% 91%",
      hslMutedForeground: "213 7% 52%",
      hslAccent: "188 42% 38%",
      hslAccentForeground: "0 0% 100%",
      hslDestructive: "0 45% 51%",
      hslDestructiveForeground: "0 0% 98%",
      hslBorder: "37 14% 86%",
      hslInput: "37 14% 86%",
      hslRing: "22 54% 43%",

      gradientHero: `radial-gradient(ellipse at 32% 5%, rgba(168, 93, 50, 0.06), transparent 48%), #F5F3EF`,
      gradientCard: `linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)`,
      gradientName: `linear-gradient(110deg, #A85D32 0%, #9B6A50 55%, #397F8A 100%)`,
      shadowGlow: `0 0 35px rgba(168, 93, 50, 0.12)`,
      shadowCard: `0 8px 24px rgba(32, 36, 42, 0.05)`,
      shadowSoft: `0 4px 14px rgba(32, 36, 42, 0.04)`,
      shadowHover: `0 0 20px rgba(168, 93, 50, 0.15)`,
      glowPrimary: `rgba(168, 93, 50, 0.05)`,
      glowSecondary: `rgba(57, 127, 138, 0.04)`,

      mesh: {
        gateway: {
          base: "bg-[#FFFFFF]",
          border: "border-[#E3DED6]",
          glow: "shadow-sm",
          accent: "text-[#535D68]",
          badge: "bg-[#535D68]/10 text-[#535D68] border-[#535D68]/20",
        },
        orchestrator: {
          base: "bg-[#FFFFFF]",
          border: "border-[#A85D32]/40",
          glow: "shadow-[0_0_15px_rgba(168,93,50,0.18)]",
          accent: "text-[#A85D32]",
          badge: "bg-[#A85D32]/10 text-[#A85D32] border-[#A85D32]/25",
        },
        llm: {
          base: "bg-[#FFFFFF]",
          border: "border-[#397F8A]/30",
          glow: "shadow-sm",
          accent: "text-[#397F8A]",
          badge: "bg-[#397F8A]/10 text-[#397F8A] border-[#397F8A]/20",
        },
        redis: {
          base: "bg-[#FFFFFF]",
          border: "border-[#A85D32]/30",
          glow: "shadow-sm",
          accent: "text-[#A85D32]",
          badge: "bg-[#A85D32]/10 text-[#A85D32] border-[#A85D32]/20",
        },
        vectordb: {
          base: "bg-[#FFFFFF]",
          border: "border-[#397F8A]/30",
          glow: "shadow-sm",
          accent: "text-[#397F8A]",
          badge: "bg-[#397F8A]/10 text-[#397F8A] border-[#397F8A]/20",
        },
        postgres: {
          base: "bg-[#FFFFFF]",
          border: "border-[#E3DED6]",
          glow: "shadow-sm",
          accent: "text-[#535D68]",
          badge: "bg-[#535D68]/10 text-[#535D68] border-[#535D68]/20",
        },
        edgeFast: "#A85D32",
        edgeSlow: "#397F8A",
      },
    },
  },

  /* ── 3. INDUSTRIAL CYBER / SYSTEM KERNEL ── */
  {
    id: "cyber",
    name: "Industrial Cyber",
    badge: "Pitch & Cyan",
    description: "Deep pitch slates with high-voltage burnt orange and electric cyan systems telemetry.",
    dark: {
      bgPrimary: "#080B10",
      bgSecondary: "#0F141C",
      bgTertiary: "#141A24",
      bgElevated: "#1C2433",
      bgTerminal: "#05070A",

      borderPrimary: "#1E2736",
      borderSecondary: "#2A364A",
      borderSubtle: "rgba(255, 255, 255, 0.06)",
      borderHover: "#3B4D68",

      textPrimary: "#F1F5F9",
      textSecondary: "#94A3B8",
      textMuted: "#64748B",
      textDisabled: "#475569",

      accentPrimary: "#F97316",
      accentHover: "#FB923C",
      accentStrong: "#EA580C",
      accentSubtle: "rgba(249, 115, 22, 0.12)",
      accentBorder: "rgba(249, 115, 22, 0.30)",

      accentTertiary: "#06B6D4",
      accentTertiaryHover: "#22D3EE",
      accentTertiarySubtle: "rgba(6, 182, 212, 0.10)",
      accentTertiaryBorder: "rgba(6, 182, 212, 0.28)",

      statusSuccess: "#10B981",
      statusWarning: "#F59E0B",
      statusError: "#EF4444",
      statusInfo: "#64748B",

      hslBackground: "218 33% 5%",
      hslForeground: "210 40% 96%",
      hslCard: "216 30% 9%",
      hslCardForeground: "210 40% 96%",
      hslPopover: "217 29% 15%",
      hslPopoverForeground: "210 40% 96%",
      hslPrimary: "24 95% 53%",
      hslPrimaryForeground: "218 33% 5%",
      hslSecondary: "218 29% 11%",
      hslSecondaryForeground: "210 40% 96%",
      hslMuted: "218 29% 11%",
      hslMutedForeground: "215 20% 65%",
      hslAccent: "189 94% 43%",
      hslAccentForeground: "218 33% 5%",
      hslDestructive: "0 84% 60%",
      hslDestructiveForeground: "210 40% 96%",
      hslBorder: "217 28% 17%",
      hslInput: "217 28% 17%",
      hslRing: "24 95% 53%",

      gradientHero: `radial-gradient(ellipse at 32% 5%, rgba(249, 115, 22, 0.08), transparent 48%), radial-gradient(ellipse at 5% 48%, rgba(6, 182, 212, 0.05), transparent 42%), #080B10`,
      gradientCard: `linear-gradient(180deg, rgba(30, 39, 54, 0.5) 0%, rgba(15, 20, 28, 0.8) 100%)`,
      gradientName: `linear-gradient(135deg, #F97316 0%, #FB923C 45%, #06B6D4 100%)`,
      shadowGlow: `0 0 45px rgba(249, 115, 22, 0.22)`,
      shadowCard: `0 8px 30px rgba(0, 0, 0, 0.55)`,
      shadowSoft: `0 4px 20px rgba(0, 0, 0, 0.40)`,
      shadowHover: `0 0 22px rgba(249, 115, 22, 0.25)`,
      glowPrimary: `rgba(249, 115, 22, 0.12)`,
      glowSecondary: `rgba(6, 182, 212, 0.08)`,

      mesh: {
        gateway: {
          base: "bg-[#0F141C]",
          border: "border-[#1E2736] hover:border-[#2A364A]",
          glow: "shadow-[0_0_12px_rgba(100,116,139,0.15)]",
          accent: "text-[#64748B]",
          badge: "bg-[#64748B]/10 text-[#64748B] border-[#64748B]/25",
        },
        orchestrator: {
          base: "bg-[#1C2433]",
          border: "border-[#F97316]/50 hover:border-[#F97316]",
          glow: "shadow-[0_0_24px_rgba(249,115,22,0.30)]",
          accent: "text-[#F97316]",
          badge: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/30",
        },
        llm: {
          base: "bg-[#0F141C]",
          border: "border-[#06B6D4]/40 hover:border-[#06B6D4]",
          glow: "shadow-[0_0_18px_rgba(6,182,212,0.22)]",
          accent: "text-[#06B6D4]",
          badge: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/25",
        },
        redis: {
          base: "bg-[#141A24]",
          border: "border-[#EA580C]/45 hover:border-[#FB923C]",
          glow: "shadow-[0_0_18px_rgba(234,88,12,0.24)]",
          accent: "text-[#FB923C]",
          badge: "bg-[#EA580C]/10 text-[#FB923C] border-[#EA580C]/30",
        },
        vectordb: {
          base: "bg-[#0F141C]",
          border: "border-[#06B6D4]/45 hover:border-[#06B6D4]",
          glow: "shadow-[0_0_20px_rgba(6,182,212,0.25)]",
          accent: "text-[#06B6D4]",
          badge: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/25",
        },
        postgres: {
          base: "bg-[#0F141C]",
          border: "border-[#1E2736] hover:border-[#2A364A]",
          glow: "shadow-[0_0_12px_rgba(100,116,139,0.15)]",
          accent: "text-[#64748B]",
          badge: "bg-[#64748B]/10 text-[#64748B] border-[#64748B]/25",
        },
        edgeFast: "#F97316",
        edgeSlow: "#06B6D4",
      },
    },
    light: {
      bgPrimary: "#F8FAFC",
      bgSecondary: "#FFFFFF",
      bgTertiary: "#EDF2F7",
      bgElevated: "#FFFFFF",
      bgTerminal: "#EDF2F7",

      borderPrimary: "#CBD5E1",
      borderSecondary: "#94A3B8",
      borderSubtle: "rgba(0, 0, 0, 0.05)",
      borderHover: "#64748B",

      textPrimary: "#0F172A",
      textSecondary: "#475569",
      textMuted: "#64748B",
      textDisabled: "#94A3B8",

      accentPrimary: "#EA580C",
      accentHover: "#C2410C",
      accentStrong: "#9A3412",
      accentSubtle: "rgba(234, 88, 12, 0.10)",
      accentBorder: "rgba(234, 88, 12, 0.25)",

      accentTertiary: "#0891B2",
      accentTertiaryHover: "#0E7490",
      accentTertiarySubtle: "rgba(8, 145, 178, 0.10)",
      accentTertiaryBorder: "rgba(8, 145, 178, 0.25)",

      statusSuccess: "#10B981",
      statusWarning: "#EA580C",
      statusError: "#DC2626",
      statusInfo: "#475569",

      hslBackground: "210 40% 98%",
      hslForeground: "222 47% 11%",
      hslCard: "0 0% 100%",
      hslCardForeground: "222 47% 11%",
      hslPopover: "0 0% 100%",
      hslPopoverForeground: "222 47% 11%",
      hslPrimary: "21 90% 48%",
      hslPrimaryForeground: "0 0% 100%",
      hslSecondary: "210 40% 93%",
      hslSecondaryForeground: "222 47% 11%",
      hslMuted: "210 40% 93%",
      hslMutedForeground: "215 16% 47%",
      hslAccent: "192 91% 36%",
      hslAccentForeground: "0 0% 100%",
      hslDestructive: "0 84% 60%",
      hslDestructiveForeground: "0 0% 100%",
      hslBorder: "214 32% 84%",
      hslInput: "214 32% 84%",
      hslRing: "21 90% 48%",

      gradientHero: `radial-gradient(ellipse at 32% 5%, rgba(234, 88, 12, 0.08), transparent 48%), #F8FAFC`,
      gradientCard: `linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)`,
      gradientName: `linear-gradient(135deg, #EA580C 0%, #C2410C 45%, #0891B2 100%)`,
      shadowGlow: `0 0 35px rgba(234, 88, 12, 0.15)`,
      shadowCard: `0 8px 24px rgba(15, 23, 42, 0.06)`,
      shadowSoft: `0 4px 14px rgba(15, 23, 42, 0.04)`,
      shadowHover: `0 0 20px rgba(234, 88, 12, 0.18)`,
      glowPrimary: `rgba(234, 88, 12, 0.08)`,
      glowSecondary: `rgba(8, 145, 178, 0.06)`,

      mesh: {
        gateway: {
          base: "bg-[#FFFFFF]",
          border: "border-[#CBD5E1]",
          glow: "shadow-sm",
          accent: "text-[#475569]",
          badge: "bg-[#475569]/10 text-[#475569] border-[#475569]/20",
        },
        orchestrator: {
          base: "bg-[#FFFFFF]",
          border: "border-[#EA580C]/40",
          glow: "shadow-[0_0_15px_rgba(234,88,12,0.18)]",
          accent: "text-[#EA580C]",
          badge: "bg-[#EA580C]/10 text-[#EA580C] border-[#EA580C]/25",
        },
        llm: {
          base: "bg-[#FFFFFF]",
          border: "border-[#0891B2]/30",
          glow: "shadow-sm",
          accent: "text-[#0891B2]",
          badge: "bg-[#0891B2]/10 text-[#0891B2] border-[#0891B2]/20",
        },
        redis: {
          base: "bg-[#FFFFFF]",
          border: "border-[#EA580C]/30",
          glow: "shadow-sm",
          accent: "text-[#EA580C]",
          badge: "bg-[#EA580C]/10 text-[#EA580C] border-[#EA580C]/20",
        },
        vectordb: {
          base: "bg-[#FFFFFF]",
          border: "border-[#0891B2]/30",
          glow: "shadow-sm",
          accent: "text-[#0891B2]",
          badge: "bg-[#0891B2]/10 text-[#0891B2] border-[#0891B2]/20",
        },
        postgres: {
          base: "bg-[#FFFFFF]",
          border: "border-[#CBD5E1]",
          glow: "shadow-sm",
          accent: "text-[#475569]",
          badge: "bg-[#475569]/10 text-[#475569] border-[#475569]/20",
        },
        edgeFast: "#EA580C",
        edgeSlow: "#0891B2",
      },
    },
  },
];

export const DEFAULT_THEME_ID = "cyber";

export function getThemePreset(id: string): ThemePreset {
  return THEME_PRESETS.find((p) => p.id === id) || THEME_PRESETS[0];
}

/**
 * Injects CSS custom properties dynamically on :root / document.documentElement
 * so that all elements and Tailwind utilities immediately react to theme changes.
 */
export function applyThemeTokens(preset: ThemePreset, isDark: boolean): void {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const t = isDark ? preset.dark : preset.light;

  // Backgrounds & Surfaces
  root.style.setProperty("--bg-primary", t.bgPrimary);
  root.style.setProperty("--bg-secondary", t.bgSecondary);
  root.style.setProperty("--bg-tertiary", t.bgTertiary);
  root.style.setProperty("--bg-elevated", t.bgElevated);
  root.style.setProperty("--bg-terminal", t.bgTerminal);

  // Borders
  root.style.setProperty("--border-primary", t.borderPrimary);
  root.style.setProperty("--border-secondary", t.borderSecondary);
  root.style.setProperty("--border-subtle", t.borderSubtle);
  root.style.setProperty("--border-hover", t.borderHover);

  // Typography
  root.style.setProperty("--text-primary", t.textPrimary);
  root.style.setProperty("--text-secondary", t.textSecondary);
  root.style.setProperty("--text-muted", t.textMuted);
  root.style.setProperty("--text-disabled", t.textDisabled);

  // Accents
  root.style.setProperty("--accent-primary", t.accentPrimary);
  root.style.setProperty("--accent-hover", t.accentHover);
  root.style.setProperty("--accent-strong", t.accentStrong);
  root.style.setProperty("--accent-subtle", t.accentSubtle);
  root.style.setProperty("--accent-border", t.accentBorder);

  // Tertiary / Teal / Green Accent
  root.style.setProperty("--accent-teal", t.accentTertiary);
  root.style.setProperty("--accent-teal-hover", t.accentTertiaryHover);
  root.style.setProperty("--accent-teal-subtle", t.accentTertiarySubtle);
  root.style.setProperty("--accent-teal-border", t.accentTertiaryBorder);

  // Status Colors
  root.style.setProperty("--status-success", t.statusSuccess);
  root.style.setProperty("--status-warning", t.statusWarning);
  root.style.setProperty("--status-error", t.statusError);
  root.style.setProperty("--status-info", t.statusInfo);

  // Tailwind HSL Core Variables
  root.style.setProperty("--background", t.hslBackground);
  root.style.setProperty("--foreground", t.hslForeground);
  root.style.setProperty("--card", t.hslCard);
  root.style.setProperty("--card-foreground", t.hslCardForeground);
  root.style.setProperty("--popover", t.hslPopover);
  root.style.setProperty("--popover-foreground", t.hslPopoverForeground);
  root.style.setProperty("--primary", t.hslPrimary);
  root.style.setProperty("--primary-foreground", t.hslPrimaryForeground);
  root.style.setProperty("--secondary", t.hslSecondary);
  root.style.setProperty("--secondary-foreground", t.hslSecondaryForeground);
  root.style.setProperty("--muted", t.hslMuted);
  root.style.setProperty("--muted-foreground", t.hslMutedForeground);
  root.style.setProperty("--accent", t.hslAccent);
  root.style.setProperty("--accent-foreground", t.hslAccentForeground);
  root.style.setProperty("--destructive", t.hslDestructive);
  root.style.setProperty("--destructive-foreground", t.hslDestructiveForeground);
  root.style.setProperty("--border", t.hslBorder);
  root.style.setProperty("--input", t.hslInput);
  root.style.setProperty("--ring", t.hslRing);

  // Gradients & Shadows
  root.style.setProperty("--gradient-hero", t.gradientHero);
  root.style.setProperty("--gradient-card", t.gradientCard);
  root.style.setProperty("--gradient-name", t.gradientName);
  root.style.setProperty("--gradient-purple", t.gradientName);
  root.style.setProperty("--shadow-glow", t.shadowGlow);
  root.style.setProperty("--shadow-card", t.shadowCard);
  root.style.setProperty("--shadow-soft", t.shadowSoft);
  root.style.setProperty("--shadow-hover", t.shadowHover);
  root.style.setProperty("--glow-primary", t.glowPrimary);
  root.style.setProperty("--glow-secondary", t.glowSecondary);

  // Set data attribute for CSS targeting
  root.setAttribute("data-theme", preset.id);
}

