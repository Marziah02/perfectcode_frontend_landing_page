// Section 4 - What You Can Build
const buildTypes = [
  {
    icon: Layers,
    title: "SaaS products",
    description:
      "Scale your business with robust multi-tenant software solutions.",
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-500/20",
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description:
      "Connect buyers and sellers with powerful e-commerce platforms.",
    color: "from-purple-500 to-pink-400",
    border: "border-purple-500/20",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Visualize complex data with intuitive management interfaces.",
    color: "from-indigo-500 to-blue-400",
    border: "border-indigo-500/20",
  },
  {
    icon: Wrench,
    title: "Internal tools",
    description:
      "Streamline operations with custom-built enterprise utilities.",
    color: "from-orange-500 to-yellow-400",
    border: "border-orange-500/20",
  },
  {
    icon: FileText,
    title: "Landing pages",
    description: "High-converting single pages designed for maximum impact.",
    color: "from-green-500 to-emerald-400",
    border: "border-green-500/20",
  },
  {
    icon: Bot,
    title: "AI apps",
    description: "Leverage LLMs and neural networks for next-gen features.",
    color: "from-red-500 to-rose-400",
    border: "border-red-500/20",
  },
];
function WhatYouCanBuildSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What You Can Build
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-[#0d0e22] border ${item.border} rounded-[24px] p-8 transition-all duration-300 hover:bg-[#12132b] hover:border-white/10 flex flex-col items-start overflow-hidden`}
              >
                {/* Decorative Background Glow */}
                <div
                  className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${item.color} blur-[50px] opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                {/* Icon Container */}
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8b8da1] text-[15px] leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const differentiators = [
  {
    icon: Code,
    title: "Real code, not no-code",
    description:
      "Export clean, standard React/HTML code that your team can actually maintain and scale.",
    glow: "group-hover:shadow-blue-500/20",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Monitor,
    title: "Live sandbox preview",
    description:
      "See your changes instantly in a high-fidelity browser environment with hot-reloading.",
    glow: "group-hover:shadow-purple-500/20",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Package,
    title: "Production-ready",
    description:
      "Automated bundling and optimization ensures your code is ready for the real world.",
    glow: "group-hover:shadow-orange-500/20",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: GitBranch,
    title: "Version control",
    description:
      "Built-in branching and merging logic designed specifically for collaborative AI generation.",
    glow: "group-hover:shadow-emerald-500/20",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Wand2,
    title: "AI copilot for editing",
    description:
      "Don't just generate—iterate. Refine specific components or logic with natural language.",
    glow: "group-hover:shadow-indigo-500/20",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: ShieldCheck,
    title: "Security first",
    description:
      "Enterprise-grade sandboxing keeps your data and generated code safe from vulnerabilities.",
    glow: "group-hover:shadow-rose-500/20",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function WhyDifferentSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What You Can Build
          </h2>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {differentiators.map((item) => (
            <div
              key={item.text}
              className="content-card px-5 py-3 glow-hover flex items-center gap-3"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div> */}
        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {buildTypes.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative p-8 rounded-2xl overflow-hidden border border-white/[0.08] transition-all duration-500 ${item.glow} hover:border-white/20 hover:shadow-2xl`}
            >
              {/* Individual Card Background Image */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlays for glass effect */}
                {/* <div className="absolute inset-0 bg-slate-950/60  backdrop-blur-sm"></div> */}
                <div className="absolute inset-0 bg-slate-950/60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/40 to-slate-950/90"></div>
              </div>

              {/* Content - Relative to be above bg image */}
              <div className="relative z-10">
                <div className="relative w-12 h-12 mb-8">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {/* <item.icon
                    className="relative w-full h-full text-[#8044e2] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  /> */}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#8044e2] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 group-hover:text-slate-200 leading-relaxed text-sm mb-6 transition-colors">
                  {item.description}
                </p>

                {/* <div className="flex items-center gap-2 text-xs font-bold text-blue-500/50 group-hover:text-blue-400 tracking-widest uppercase transition-colors">
                  Details{" "}
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
