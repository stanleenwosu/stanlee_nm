import { Project, ExperienceItem, SkillCategory } from '../types';

export type Language = 'en' | 'de';

export interface LocalizedContent {
  profile: {
    name: string;
    brandName: string;
    title: string;
    tagline: string;
    bioParagraphs: string[];
    portraitUrl: string;
    portraitAlt: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  projects: Project[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  ui: {
    nav: {
      studio: string;
      projects: string;
      about: string;
      skills: string;
      timeline: string;
      inquiry: string;
    };
    hero: {
      badge: string;
      headlineFirst: string;
      headlineSecond: string;
      viewProjects: string;
      getInTouch: string;
      featuredBadge: string;
      featuredSubtitle: string;
      pillar1Title: string;
      pillar1Desc: string;
      pillar2Title: string;
      pillar2Desc: string;
      pillar3Title: string;
      pillar3Desc: string;
    };
    projectsSection: {
      tag: string;
      title: string;
      titleSub: string;
      desc: string;
      viewCaseStudy: string;
      architectureSpec: string;
      systemMetrics: string;
      verifiedLive: string;
      verifiedMetrics: string;
      readTime: string;
    };
    aboutSection: {
      badge: string;
      portraitLabel: string;
      cvButton: string;
      headlineFirst: string;
      headlineSecond: string;
      careerTimeline: string;
      careerTimelineSub: string;
      chronologyBadge: string;
    };
    skillsSection: {
      badge: string;
      headlineFirst: string;
      headlineSecond: string;
      desc: string;
      competencyScale: string;
      scaleDesc: string;
    };
    contactSection: {
      tag: string;
      headlineFirst: string;
      headlineSecond: string;
      desc: string;
      formName: string;
      formEmail: string;
      formSubject: string;
      formMessage: string;
      formNamePlaceholder: string;
      formEmailPlaceholder: string;
      formMessagePlaceholder: string;
      sendButton: string;
      submit: string;
      sendingButton: string;
      successTitle: string;
      successDesc: string;
      directChannels: string;
      copied: string;
    };
    projectModal: {
      tag: string;
      overviewTitle: string;
      subsystemsTitle: string;
      verifiedStack: string;
      inspectSource: string;
      returnBtn: string;
    };
    codeModal: {
      title: string;
      copied: string;
      copy: string;
      benchmarked: string;
      dismiss: string;
    };
    resumeModal: {
      title: string;
      verifiedTag: string;
      headerTag: string;
      downloadPdf: string;
      printCv: string;
      downloaded: string;
      preparing: string;
      printPdf: string;
      copied: string;
      copyDirect: string;
      summaryHeading: string;
      summaryTitle: string;
      competencyHeading: string;
      experienceHeading: string;
      experienceTitle: string;
      skillsTitle: string;
      educationHeading: string;
      educationDegree: string;
      educationSchool: string;
      educationPeriod: string;
      close: string;
    };
    footer: {
      tagline: string;
      rights: string;
      scrollTop: string;
      ascend: string;
    };
    langSwitcher: {
      toggleLabel: string;
      currentLabel: string;
    };
  };
}

export const TRANSLATIONS: Record<Language, LocalizedContent> = {
  en: {
    profile: {
      name: 'Stanlee Nwosu',
      brandName: 'STANLEE_NM',
      title: 'FULLSTACK SOFTWARE DEVELOPER',
      tagline: 'Designing and engineering scalable fullstack web applications, resilient backend architectures, and high-performance user experiences across the modern cloud ecosystem.',
      bioParagraphs: [
        'I am a fullstack software developer dedicated to engineering end-to-end digital solutions that bridge robust backend systems with responsive, accessible user interfaces. I work across the entire product lifecycle—from relational data modeling and REST/GraphQL API architecture to reactive frontend state orchestration and automated cloud deployments.',
        'With deep proficiencies in TypeScript, React, Next.js, Node.js, Python, and cloud infrastructure, I emphasize clean architectural patterns, comprehensive automated test suites, and sub-second load times. Whether crafting modular micro-frontends or engineering high-throughput backend services, I build software that delivers deterministic reliability at scale.'
      ],
      portraitUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpdjKs84GFCyKEQ2g7sqctnMDE4I_rurRNghAOPxSYf9_ZgLyp6u1unado3O4JRqWXNYOLsqdNMzRcaymOAyVs9E-YwrX1wvSEbspj8Uv0Pf5M2Xlbjd0OvEhi-ku-6AWqCiUCfUxFzGSzNQLzveHKY8M5xC296bFf49pcjIA20SBlk-E6INISxZ278Oh5-14iIA5Lyi6rNML7XTx7Ca538OprI84x3vKyQlCChAKfRHPIntgyWUg',
      portraitAlt: 'High-contrast monochrome studio portrait of Stanlee Nwosu, fullstack software developer.',
      socials: {
        github: 'https://github.com/stanleenwosu',
        linkedin: 'https://linkedin.com/in/stanleenwosu',
        email: 'stanleenwosu@gmail.com'
      }
    },
    projects: [
      {
        id: 'fullstack-commerce-platform',
        title: 'ENTERPRISE COMMERCE ENGINE',
        subtitle: 'Next.js 14, Node.js API Gateway & Stripe Infrastructure',
        description: 'Fullstack high-volume ecommerce ecosystem with SSR catalog caching, real-time inventory management, idempotent Stripe webhooks, and an administrative metrics dashboard.',
        longDescription: 'Engineered an end-to-end commerce platform supporting 80,000+ SKU records and handling concurrent flash-sale transaction surges. Implemented optimistic UI cart sync in React 18, decoupled Node.js microservices for order lifecycle management, and configured automated PostgreSQL read-replicas with Redis caching to maintain sub-100ms API responses.',
        architectureBreakdown: [
          {
            title: 'Fullstack Next.js SSR & React Hydration',
            description: 'Server Components with incremental static regeneration (ISR) paired with client-side state caching for instant checkout transitions.'
          },
          {
            title: 'Node.js & Express / Nest Microservices',
            description: 'Idempotent webhook queue workers, automated inventory deduction routines, and transactional order dispatch pipelines.'
          },
          {
            title: 'PostgreSQL & Redis Data Layer',
            description: 'Optimized relational schema with foreign key constraints, connection pooling via PgBouncer, and sub-millisecond session state caching.'
          }
        ],
        metrics: [
          { label: 'API Response Time', value: '42ms', change: 'Sub-100ms p95 global' },
          { label: 'Checkout Conversion', value: '+34%', change: 'Optimized 1-click flow' },
          { label: 'Uptime Reliability', value: '99.98%', change: 'Zero dropped transactions' }
        ],
        tags: ['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'REDIS', 'STRIPE'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ekSgzcdfnyZlK3hvSunEpCTgJa_-v8kx7hQ8MhyFPI407gctA4fljJo9THK9_mKTPi604yRhWNK7DjBLObwtH62edXMULR3S7uFikBVvrXanBvHeyog329PT1dXNvsT3OVGBIMxpXKPj_XUZCrLpHRngF30BiGUTeZa6VzJ77Bk-qjJUTRJEScHgk3vxo045nfn80R6LmWBGgIkjxT2N_XkCHZzlyxoplCCDusK-Xwqufti4yEo',
        imageAlt: 'Monochrome high-contrast technical dashboard interface for ecommerce analytics.',
        codeLanguage: 'typescript',
        codeSnippet: `// Fullstack Order Transaction & Idempotency Pipeline
export async function processOrderCheckout(
  req: CheckoutRequest,
  db: DatabaseClient
): Promise<CheckoutResult> {
  return await db.transaction(async (tx) => {
    // 1. Verify idempotency key in Redis cache
    const isProcessed = await redis.set(\`idemp:\${req.idempotencyKey}\`, 'LOCKED', 'NX', 'EX', 120);
    if (!isProcessed) {
      throw new ConflictError('Duplicate transaction signature detected.');
    }

    // 2. Lock & allocate real-time inventory
    const inventory = await tx.inventory.decrementBatch(req.items);
    
    // 3. Initiate payment charge with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.totalAmountCents,
      currency: 'usd',
      customer: req.customerId,
      metadata: { orderId: req.orderId }
    });

    // 4. Record order & dispatch event
    const order = await tx.orders.create({ ...req, stripePaymentId: paymentIntent.id });
    await eventBus.publish('order.created', { orderId: order.id });
    return { status: 'success', orderId: order.id };
  });
}`
      },
      {
        id: 'collaborative-workspace-hub',
        title: 'COLLABORATIVE WORKSPACE HUB',
        subtitle: 'Real-Time Synchronized Canvas & Presence Architecture',
        description: 'Collaborative team productivity application featuring live multi-cursor presence, state reconciliation via CRDTs, and offline-first client synchronization.',
        longDescription: 'Constructed a comprehensive fullstack collaboration suite allowing distributed teams to co-edit project boards, flowcharts, and technical notes simultaneously. Built with a React/TypeScript interface and a high-concurrency Node.js and WebSocket backend utilizing Redis Pub/Sub channels across distributed nodes.',
        architectureBreakdown: [
          {
            title: 'Bi-Directional WebSocket Gateway',
            description: 'Scalable Node.js / Socket.IO cluster handling 50,000+ persistent socket connections with automatic heartbeat recovery.'
          },
          {
            title: 'CRDT Conflict Reconciliation',
            description: 'Deterministic peer-to-peer data convergence ensuring zero write conflicts during rapid concurrent team updates.'
          },
          {
            title: 'Optimistic Client Cache',
            description: 'Local IndexedDB caching layer supporting seamless offline authoring and immediate visual feedback.'
          }
        ],
        metrics: [
          { label: 'Sync Latency', value: '< 18ms', change: 'Global peer propagation' },
          { label: 'Concurrent Users', value: '50k+', change: 'Per distributed cluster' },
          { label: 'Offline Sync Accuracy', value: '100%', change: 'Zero state corruption' }
        ],
        tags: ['REACT', 'TYPESCRIPT', 'WEBSOCKETS', 'NODE.JS', 'REDIS', 'DOCKER'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsAJfXxr10uf32uJ385QmaYql-1gH4n6TAvO42Vnx4D13LCwAOVxXt6EWbwQjq5PXsZt0xJvgoXaiaACDOmggekPjs1MfTdAj92O8X5ceI-L5yB1SbexUCzDGeItCQ53lN3E77VlCbpB8bmnUPesAdFPkhckuTlltl0n4teIA1wstqn9ZS_ViSRykWNok5MIm0t3cvIo0ok6a2MhLPV8wcK3AqnJ6E1jbhSe5L2xISICkkXicR9fU',
        imageAlt: 'Monochromatic conceptual visualization of connected collaborative data streams.',
        codeLanguage: 'typescript',
        codeSnippet: `// WebSocket Collaborative State Synchronization
export class DocumentRoomManager {
  private pubClient = getRedisClient();
  private subClient = getRedisClient();

  async handleUserEdit(roomId: string, userId: string, operation: CRDTOperation) {
    // 1. Broadcast locally to room participants
    socketServer.to(roomId).except(userId).emit('op:receive', operation);

    // 2. Publish cross-node synchronization delta
    await this.pubClient.publish(\`room:\${roomId}:sync\`, JSON.stringify({
      author: userId,
      payload: operation,
      timestamp: Date.now()
    }));
  }
}`
      },
      {
        id: 'cloud-telemetry-api-gateway',
        title: 'CLOUD TELEMETRY & API GATEWAY',
        subtitle: 'Python FastAPI Microservices & React Monitoring Console',
        description: 'Centralized API gateway and telemetry portal monitoring distributed microservices with dynamic rate limiting, token authentication, and live metrics visualization.',
        longDescription: 'Architected a cloud-native gateway aggregating 30+ internal microservices into a coherent REST and GraphQL interface. Includes automated API documentation generation, role-based JWT validation, token bucket rate limiting, and an interactive React dashboard for real-time traffic inspection.',
        architectureBreakdown: [
          {
            title: 'Asynchronous Python FastAPI Gateway',
            description: 'High-throughput async ASGI router proxying upstream services with non-blocking I/O and schema validation.'
          },
          {
            title: 'JWT Auth & RBAC Security Layer',
            description: 'Cryptographic token validation with claim verification and automated API key quota management.'
          },
          {
            title: 'React Analytics Dashboard',
            description: 'Interactive telemetry portal with Recharts time-series data visualizers, error log querying, and latency alerts.'
          }
        ],
        metrics: [
          { label: 'Routing Overhead', value: '1.4ms', change: 'Zero bottlenecks' },
          { label: 'Daily Requests Served', value: '12M+', change: 'Autoscaled on AWS ECS' },
          { label: 'Security Verification', value: '100%', change: 'Strict schema enforcement' }
        ],
        tags: ['PYTHON', 'FASTAPI', 'REACT', 'GRAPHQL', 'DOCKER', 'AWS'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI_4N4B6DrUPEtPxjvRTLELMwb7Et7h3TlbSbv_FFkLzo6kk4oDQy5tJn-z2AB-jDHuJx7zgGa5x5BwFsZc97tKzLkudnKMkedBG7l0fl6N_jDtC0LfniNYGlnlGg6jHeZ0dKmmqhVZ9EwFf4Api-G0TkJqo9PE-3boWoNIvUTDDPnaAleeGLAuONNUiguquFaL1rrQw7-94wVHhb87BktXju2gQCHVxLx4Je7_QTRwQ4EcnUgmoc',
        imageAlt: 'Minimal monochrome render of networked systems and microservice topologies.',
        codeLanguage: 'typescript',
        codeSnippet: `// Fast API Gateway Reverse Proxy & Rate Limiter Handler
export async function authenticateAndProxy(
  req: IncomingMessage,
  res: ServerResponse,
  targetServiceUrl: string
): Promise<void> {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token || !verifyJwtSignature(token)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Unauthorized gateway access' }));
  }

  // Token Bucket Rate Limiter Check (100 req / min)
  const clientIp = req.socket.remoteAddress || 'unknown';
  const allowed = await rateLimiter.consume(clientIp, 1);
  if (!allowed) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Too Many Requests' }));
  }

  return proxyRequest(req, res, targetServiceUrl);
}`
      },
      {
        id: 'design-system-component-registry',
        title: 'DESIGN SYSTEM & COMPONENT REGISTRY',
        subtitle: 'Modular TypeScript Monorepo & UI Component Library',
        description: 'Enterprise fullstack design system used by 25+ developers across multiple web products. Automated token pipelines, Storybook documentation, and automated npm publishing.',
        longDescription: 'Created a unified fullstack design system package leveraging Turborepo, TypeScript, Tailwind CSS, and Storybook. Features automated semantic versioning, strict accessibility (WCAG 2.1 AA) validation in CI pipelines, and cross-framework component wrappers.',
        architectureBreakdown: [
          {
            title: 'Design Token Compiler',
            description: 'Transforms raw Figma design variables into strict CSS custom properties and typed TypeScript theme schemas.'
          },
          {
            title: 'Accessible Headless Components',
            description: 'Keyboard-navigable, screen-reader verified UI components engineered with Radix primitives and Tailwind styling.'
          },
          {
            title: 'Monorepo & Automated CI/CD',
            description: 'Turborepo workspace with automated linting, visual regression testing, and semantic changelog generation.'
          }
        ],
        metrics: [
          { label: 'Engineering Adoption', value: '100%', change: '25+ developers active' },
          { label: 'Accessibility Score', value: '100/100', change: 'Full WCAG AA compliance' },
          { label: 'Bundle Impact', value: '0.9 KB avg', change: 'Fully tree-shakeable' }
        ],
        tags: ['TYPESCRIPT', 'REACT', 'TAILWIND CSS', 'STORYBOOK', 'TURBOREPO'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7sx7jWkSG38vsTPQB0p1h0MPMAHD_fVJKdQhmHF_-weJkWtVg7F10iXvsN3JFHvBkRwmhA7qjrzNJJS8XUcuyL9IPYf7Z55PWO1TqbV5qRvIXaq95Z2SLKcdNVOsJyCjtJlOmFLm-TiPg5tPQd6l3GPylKG23jkM2-spBy1WsKe0sAjPV7m-2jOQnFHliZA823PgrNhbcnGYQyQ0sSBBtFFGF2-UNvknN6_ny1npY9JjMLHOC0No',
        imageAlt: 'Monochrome technical design grid showcasing modular design system components.',
        codeLanguage: 'typescript',
        codeSnippet: `// Polymorphic Component Factory with Strict Type Enforcement
export type PolymorphicProps<E extends React.ElementType, P = {}> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E;
  };

export const Button = React.forwardRef(
  <E extends React.ElementType = 'button'>(
    { as, className, variant = 'primary', ...props }: PolymorphicProps<E, ButtonProps>,
    ref: React.Ref<Element>
  ) => {
    const Component = as || 'button';
    const styles = getButtonVariantStyles(variant);
    return <Component ref={ref} className={cn(styles, className)} {...props} />;
  }
);`
      }
    ],
    experiences: [
      {
        id: 'exp-1',
        period: '2022 — PRESENT',
        role: 'Senior Fullstack Software Developer',
        company: 'Nexus Cloud Labs',
        location: 'San Francisco, CA / Remote',
        description: 'Leading fullstack architecture and development for enterprise SaaS platforms. Designing distributed Node.js/TypeScript microservices, modern React/Next.js client applications, and scalable PostgreSQL database schemas.',
        bullets: [
          'Architected end-to-end web platforms handling over 10M monthly active user interactions with 99.99% system availability.',
          'Constructed a shared internal React component library, accelerating feature delivery velocity across 5 product teams by 35%.',
          'Optimized backend API pipelines and database indexes, slashing p95 latency from 380ms to 65ms.',
          'Implemented automated CI/CD deployment pipelines using GitHub Actions, Docker, and AWS ECS.'
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
      },
      {
        id: 'exp-2',
        period: '2019 — 2022',
        role: 'Fullstack Software Engineer',
        company: 'Veloce Digital Systems',
        location: 'Austin, TX / Hybrid',
        description: 'Engineered high-performance web applications, customer portals, and RESTful/GraphQL backend services. Spearheaded frontend state management migrations and backend microservice integrations.',
        bullets: [
          'Built reactive, accessible single-page applications using React, TypeScript, and Tailwind CSS.',
          'Engineered scalable REST and GraphQL API services utilizing Node.js/Express and Python FastAPI.',
          'Integrated payment gateways (Stripe), authentication providers (OAuth, JWT), and third-party webhook ingestors.',
          'Established unit and end-to-end testing standards using Jest and Playwright, achieving 92% automated code coverage.'
        ],
        techStack: ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Stripe']
      },
      {
        id: 'exp-3',
        period: '2017 — 2019',
        role: 'Fullstack Web Developer',
        company: 'ByteCraft Interactive',
        location: 'Remote',
        description: 'Developed and shipped modern fullstack web products for high-growth startups. Specialized in translating Figma designs into responsive, production-ready frontend interfaces coupled with robust backend APIs.',
        bullets: [
          'Migrated legacy monolithic web applications into decoupled React and Node.js REST API stacks.',
          'Designed relational database models in PostgreSQL and MongoDB with efficient indexing and caching strategies.',
          'Implemented responsive, mobile-first interfaces adhering strictly to modern design systems and SEO best practices.'
        ],
        techStack: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
      }
    ],
    skillCategories: [
      {
        title: 'Frontend Engineering',
        code: 'FRONT_01',
        description: 'Modern reactive frameworks, design systems, and responsive web performance.',
        skills: [
          { name: 'React 18/19 & Next.js', level: 98, focus: 'Server Components, SSR/SSG, Hooks, App Router' },
          { name: 'TypeScript Strict Mode', level: 96, focus: 'Complex generics, type safety, API contract typing' },
          { name: 'Tailwind CSS & Design Systems', level: 95, focus: 'Responsive layouts, design tokens, accessibility (a11y)' },
          { name: 'State Management & Web Vitals', level: 94, focus: 'Zustand, TanStack Query, optimistic UI, sub-second LCP' }
        ]
      },
      {
        title: 'Backend & APIs',
        code: 'BACK_02',
        description: 'Scalable server runtimes, REST/GraphQL APIs, and asynchronous message queues.',
        skills: [
          { name: 'Node.js & Express / NestJS', level: 95, focus: 'RESTful architectures, middleware, async pipelines' },
          { name: 'Python & FastAPI', level: 88, focus: 'High-throughput microservices, background workers' },
          { name: 'GraphQL & WebSockets', level: 92, focus: 'Apollo Server, real-time sync, schema federation' },
          { name: 'Auth & API Security', level: 93, focus: 'OAuth2, JWT, rate limiting, role-based access control (RBAC)' }
        ]
      },
      {
        title: 'Databases & ORMs',
        code: 'DATA_03',
        description: 'Relational data modeling, in-memory caches, and query optimization.',
        skills: [
          { name: 'PostgreSQL & SQL', level: 94, focus: 'Schema design, indexing, transactions, read replicas' },
          { name: 'Redis Caching & Pub/Sub', level: 91, focus: 'Session stores, rate limiters, distributed state' },
          { name: 'Prisma & Drizzle ORM', level: 93, focus: 'Type-safe database migrations and relations' },
          { name: 'MongoDB & NoSQL', level: 87, focus: 'Document modeling, aggregation pipelines' }
        ]
      },
      {
        title: 'DevOps & Cloud',
        code: 'CLOUD_04',
        description: 'Containerization, continuous delivery pipelines, and cloud hosting.',
        skills: [
          { name: 'Docker & Containerization', level: 90, focus: 'Multi-stage builds, compose, microservice networking' },
          { name: 'AWS & Cloud Hosting', level: 89, focus: 'ECS, S3, Lambda, CloudFront, Vercel deployments' },
          { name: 'CI/CD Automation (GitHub Actions)', level: 92, focus: 'Automated test runners, linting, production deploys' },
          { name: 'Monitoring & Observability', level: 87, focus: 'Structured logging, error tracking, OpenTelemetry' }
        ]
      }
    ],
    ui: {
      nav: {
        studio: 'Studio',
        projects: 'Projects',
        about: 'About',
        skills: 'Skills',
        timeline: 'Timeline',
        inquiry: 'Get in Touch'
      },
      hero: {
        badge: 'STANLEE_NM // FULLSTACK SOFTWARE ENGINEERING',
        headlineFirst: 'Fullstack',
        headlineSecond: 'Craftsmanship',
        viewProjects: 'Explore Projects',
        getInTouch: 'Get In Touch',
        featuredBadge: 'FEATURED WORK 01 // PRODUCTION ARCHITECTURE',
        featuredSubtitle: 'Next.js 14 // Node.js // PostgreSQL // Stripe',
        pillar1Title: '01 / Full-Stack Precision',
        pillar1Desc: 'Cohesive engineering across the whole stack: type-safe contracts, efficient data pipelines, and responsive client state reconciliation.',
        pillar2Title: '02 / Scalable Systems',
        pillar2Desc: 'Containerized microservices and automated CI/CD pipelines engineered for high concurrency, zero downtime, and low latency.',
        pillar3Title: '03 / Interface Refinement',
        pillar3Desc: 'High-contrast typography, accessible interaction patterns (WCAG AA), and fluid animations delivering effortless user workflows.'
      },
      projectsSection: {
        tag: '02 // SELECTED WORKS & PRODUCTION ARCHITECTURE',
        title: 'Project',
        titleSub: 'Archives',
        desc: 'Curated fullstack web applications, microservices, and distributed data systems engineered for mission-critical reliability and performance.',
        viewCaseStudy: 'View Case Study',
        architectureSpec: 'ARCHITECTURE SPECIFICATION // CASE STUDY',
        systemMetrics: 'SYSTEM METRICS // BENCHMARKS',
        verifiedLive: 'VERIFIED IN PRODUCTION',
        verifiedMetrics: 'VERIFIED METRICS // PRODUCTION TELEMETRY',
        readTime: 'min read'
      },
      aboutSection: {
        badge: '03 // ABOUT & PHILOSOPHY',
        portraitLabel: 'PORTRAIT // STANLEE NWOSU',
        cvButton: 'Curriculum Vitae',
        headlineFirst: 'Engineering &',
        headlineSecond: 'Execution',
        careerTimeline: 'Career',
        careerTimelineSub: 'Timeline',
        chronologyBadge: '04 // CHRONOLOGY'
      },
      skillsSection: {
        badge: '05 // TECHNICAL CAPABILITIES',
        headlineFirst: 'System',
        headlineSecond: 'Competencies',
        desc: 'Proficiencies across modern frontend architectures, backend microservices, database design, and cloud infrastructure.',
        competencyScale: 'COMPETENCY SCALE',
        scaleDesc: 'Grounded in production-grade deployments, strict typing, and high-concurrency systems.'
      },
      contactSection: {
        tag: '06 // DIRECT CORRESPONDENCE',
        headlineFirst: 'Initiate',
        headlineSecond: 'Dialogue',
        desc: 'Open for fullstack software development roles, engineering opportunities, and technical consulting.',
        formName: 'Full Name',
        formEmail: 'Email Address',
        formSubject: 'Project / Inquiry Type',
        formMessage: 'Message & Specifications',
        formNamePlaceholder: 'e.g. Alex Morgan',
        formEmailPlaceholder: 'alex@company.com',
        formMessagePlaceholder: 'Outline your project scope, technical requirements, or role specifications...',
        sendButton: 'Transmit Inquiry',
        submit: 'Transmit Inquiry',
        sendingButton: 'Transmitting...',
        successTitle: 'Inquiry Dispatched',
        successDesc: 'Thank you for reaching out. Your transmission has been received and I will respond promptly.',
        directChannels: 'DIRECT CHANNELS',
        copied: 'Copied to clipboard'
      },
      projectModal: {
        tag: 'ARCHITECTURE SPECIFICATION // CASE STUDY',
        overviewTitle: '01 // SYSTEM OVERVIEW',
        subsystemsTitle: '02 // ARCHITECTURAL SUBSYSTEMS',
        verifiedStack: 'VERIFIED STACK COMPATIBILITY',
        inspectSource: 'Inspect Source Implementation',
        returnBtn: 'Return to Portfolio'
      },
      codeModal: {
        title: 'LOGIC SPECIFICATION',
        copied: 'Copied',
        copy: 'Copy Code',
        benchmarked: 'BENCHMARKED & TYPE-SAFE',
        dismiss: 'Dismiss'
      },
      resumeModal: {
        title: 'Curriculum Vitae',
        verifiedTag: 'CURRICULUM VITAE // VERIFIED PROFILE',
        headerTag: 'CURRICULUM VITAE // VERIFIED SPECIFICATION',
        downloadPdf: 'Download JSON / Spec',
        printCv: 'Print / Save PDF',
        downloaded: 'Printed / Saved',
        preparing: 'Preparing...',
        printPdf: 'Print / Export PDF',
        copied: 'Copied',
        copyDirect: 'Copy Email',
        summaryHeading: 'Professional Summary',
        summaryTitle: '01 // SUMMARY OF PRACTICE',
        competencyHeading: 'Core Technical Competencies',
        experienceHeading: 'Professional Work History',
        experienceTitle: '02 // CAREER CHRONOLOGY',
        skillsTitle: '03 // TECHNICAL MATRIX',
        educationHeading: 'Education & Continuous Learning',
        educationDegree: 'B.S. in Computer Science & Software Engineering',
        educationSchool: 'University Institute of Technology',
        educationPeriod: '2013 — 2017',
        close: 'Close Specification'
      },
      footer: {
        tagline: 'Fullstack Software Development & Cloud Engineering',
        rights: '© 2026 STANLEE_NM // ALL RIGHTS RESERVED',
        scrollTop: 'Scroll to Top',
        ascend: 'Ascend ↑'
      },
      langSwitcher: {
        toggleLabel: 'Language',
        currentLabel: 'EN'
      }
    }
  },
  de: {
    profile: {
      name: 'Stanlee Nwosu',
      brandName: 'STANLEE_NM',
      title: 'FULLSTACK SOFTWARE-ENTWICKLER',
      tagline: 'Konzeption und Entwicklung skalierbarer Fullstack-Webanwendungen, robuster Backend-Architekturen und performanter Benutzeroberflächen in modernen Cloud-Umgebungen.',
      bioParagraphs: [
        'Ich bin ein Fullstack Software-Entwickler mit Leidenschaft für ganzheitliche digitale Lösungen, die belastbare Backend-Systeme mit reaktiven, barrierefreien Benutzeroberflächen verbinden. Mein Spektrum umfasst den gesamten Produktlebenszyklus – von relationaler Datenmodellierung und REST/GraphQL-APIs bis hin zu reaktiver Frontend-Zustandsverwaltung und automatisierter Cloud-Bereitstellung.',
        'Mit fundierter Expertise in TypeScript, React, Next.js, Node.js, Python und Cloud-Infrastruktur setze ich auf klare architektonische Muster, lückenlose Testautomatisierung und Ladezeiten unter einer Sekunde. Ob modulare Micro-Frontends oder hochdurchsatzfähige Backend-Dienste – ich entwickle Software mit deterministischer Zuverlässigkeit im großen Maßstab.'
      ],
      portraitUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpdjKs84GFCyKEQ2g7sqctnMDE4I_rurRNghAOPxSYf9_ZgLyp6u1unado3O4JRqWXNYOLsqdNMzRcaymOAyVs9E-YwrX1wvSEbspj8Uv0Pf5M2Xlbjd0OvEhi-ku-6AWqCiUCfUxFzGSzNQLzveHKY8M5xC296bFf49pcjIA20SBlk-E6INISxZ278Oh5-14iIA5Lyi6rNML7XTx7Ca538OprI84x3vKyQlCChAKfRHPIntgyWUg',
      portraitAlt: 'Kontrastreiches monochromes Studioporträt von Stanlee Nwosu, Fullstack Software-Entwickler.',
      socials: {
        github: 'https://github.com/stanleenwosu',
        linkedin: 'https://linkedin.com/in/stanleenwosu',
        email: 'stanleenwosu@gmail.com'
      }
    },
    projects: [
      {
        id: 'fullstack-commerce-platform',
        title: 'ENTERPRISE E-COMMERCE ENGINE',
        subtitle: 'Next.js 14, Node.js API Gateway & Stripe-Infrastruktur',
        description: 'Hochvolumige Fullstack-E-Commerce-Plattform mit SSR-Katalog-Caching, Echtzeit-Bestandsverwaltung, idempotenten Stripe-Webhooks und administrativem Metrik-Dashboard.',
        longDescription: 'Entwicklung einer End-to-End Handelsplattform für über 80.000 Artikelnummern mit Spitzenlast-Resilienz bei Flash-Sales. Implementierung optimistischer Warenkorb-Synchronisation in React 18, entkoppelter Node.js-Microservices für die Bestellabwicklung und automatisierter PostgreSQL Read-Replicas mit Redis-Caching für API-Antwortzeiten unter 100 ms.',
        architectureBreakdown: [
          {
            title: 'Fullstack Next.js SSR & React Hydration',
            description: 'Server Components mit inkrementeller statischer Regeneration (ISR) kombiniert mit clientseitigem State-Caching für sofortige Checkout-Übergänge.'
          },
          {
            title: 'Node.js & Express / Nest Microservices',
            description: 'Idempotente Webhook-Warteschlangen, automatische Bestandsabbuchungen und transaktionale Versandpipelines.'
          },
          {
            title: 'PostgreSQL & Redis Datenlayer',
            description: 'Optimiertes relationales Schema mit Fremdschlüsseln, Connection Pooling via PgBouncer und Sub-Millisekunden-Sitzungscaching.'
          }
        ],
        metrics: [
          { label: 'API-Antwortzeit', value: '42ms', change: '< 100ms p95 global' },
          { label: 'Checkout-Konversion', value: '+34%', change: 'Optimierter 1-Klick-Ablauf' },
          { label: 'Systemverfügbarkeit', value: '99,98%', change: 'Keine Transaktionsverluste' }
        ],
        tags: ['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'REDIS', 'STRIPE'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ekSgzcdfnyZlK3hvSunEpCTgJa_-v8kx7hQ8MhyFPI407gctA4fljJo9THK9_mKTPi604yRhWNK7DjBLObwtH62edXMULR3S7uFikBVvrXanBvHeyog329PT1dXNvsT3OVGBIMxpXKPj_XUZCrLpHRngF30BiGUTeZa6VzJ77Bk-qjJUTRJEScHgk3vxo045nfn80R6LmWBGgIkjxT2N_XkCHZzlyxoplCCDusK-Xwqufti4yEo',
        imageAlt: 'Monochromes technisches Dashboard für E-Commerce-Analysen.',
        codeLanguage: 'typescript',
        codeSnippet: `// Fullstack Order Transaction & Idempotency Pipeline
export async function processOrderCheckout(
  req: CheckoutRequest,
  db: DatabaseClient
): Promise<CheckoutResult> {
  return await db.transaction(async (tx) => {
    // 1. Idempotenz-Schlüssel im Redis-Cache prüfen
    const isProcessed = await redis.set(\`idemp:\${req.idempotencyKey}\`, 'LOCKED', 'NX', 'EX', 120);
    if (!isProcessed) {
      throw new ConflictError('Doppelte Transaktionssignatur erkannt.');
    }

    // 2. Echtzeitbestand sperren & abbuchen
    const inventory = await tx.inventory.decrementBatch(req.items);
    
    // 3. Zahlungsabwicklung via Stripe ausführen
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.totalAmountCents,
      currency: 'eur',
      customer: req.customerId,
      metadata: { orderId: req.orderId }
    });

    // 4. Bestellung persistieren & Ereignis publizieren
    const order = await tx.orders.create({ ...req, stripePaymentId: paymentIntent.id });
    await eventBus.publish('order.created', { orderId: order.id });
    return { status: 'success', orderId: order.id };
  });
}`
      },
      {
        id: 'collaborative-workspace-hub',
        title: 'COLLABORATIVE WORKSPACE HUB',
        subtitle: 'Echtzeit-synchronisierte Canvas- & Präsenz-Architektur',
        description: 'Kollaborative Produktivitätsplattform mit Live-Mehrbenutzer-Cursor, automatischer Zustandskonvergenz via CRDTs und Offline-First-Client-Synchronisation.',
        longDescription: 'Entwicklung einer kollaborativen Fullstack-Suite für verteilte Teams zum simultanen Bearbeiten von Projekt-Boards, Flussdiagrammen und Notizen. Realisiert mit React/TypeScript im Frontend sowie Node.js WebSockets und Redis Pub/Sub Kanälen über mehrere Server-Knoten hinweg.',
        architectureBreakdown: [
          {
            title: 'Bi-direktionales WebSocket Gateway',
            description: 'Skalierbarer Node.js / Socket.IO Cluster für über 50.000 persistente Socket-Verbindungen mit automatischer Heartbeat-Wiederherstellung.'
          },
          {
            title: 'CRDT Konfliktresolution',
            description: 'Deterministische Peer-to-Peer Datenkonvergenz ohne Schreibkonflikte bei hochfrequenten parallelen Team-Edits.'
          },
          {
            title: 'Optimistischer Client-Cache',
            description: 'Lokale IndexedDB-Cachingschicht für nahtlose Offline-Bearbeitung und sofortige visuelle Rückmeldung.'
          }
        ],
        metrics: [
          { label: 'Sync-Latenz', value: '< 18ms', change: 'Globale Peer-Verteilung' },
          { label: 'Gleichzeitige Nutzer', value: '50k+', change: 'Pro verteiltem Cluster' },
          { label: 'Offline-Präzision', value: '100%', change: 'Keine Zustandsverfälschung' }
        ],
        tags: ['REACT', 'TYPESCRIPT', 'WEBSOCKETS', 'NODE.JS', 'REDIS', 'DOCKER'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsAJfXxr10uf32uJ385QmaYql-1gH4n6TAvO42Vnx4D13LCwAOVxXt6EWbwQjq5PXsZt0xJvgoXaiaACDOmggekPjs1MfTdAj92O8X5ceI-L5yB1SbexUCzDGeItCQ53lN3E77VlCbpB8bmnUPesAdFPkhckuTlltl0n4teIA1wstqn9ZS_ViSRykWNok5MIm0t3cvIo0ok6a2MhLPV8wcK3AqnJ6E1jbhSe5L2xISICkkXicR9fU',
        imageAlt: 'Monochrome Visualisierung vernetzter kollaborativer Datenströme.',
        codeLanguage: 'typescript',
        codeSnippet: `// WebSocket Collaborative State Synchronization
export class DocumentRoomManager {
  private pubClient = getRedisClient();
  private subClient = getRedisClient();

  async handleUserEdit(roomId: string, userId: string, operation: CRDTOperation) {
    // 1. Lokal an Raumnutzer verteilen
    socketServer.to(roomId).except(userId).emit('op:receive', operation);

    // 2. Knotenübergreifende Synchronisationsdeltas publizieren
    await this.pubClient.publish(\`room:\${roomId}:sync\`, JSON.stringify({
      author: userId,
      payload: operation,
      timestamp: Date.now()
    }));
  }
}`
      },
      {
        id: 'cloud-telemetry-api-gateway',
        title: 'CLOUD-TELEMETRIE & API-GATEWAY',
        subtitle: 'Python FastAPI Microservices & React Monitoring-Konsole',
        description: 'Zentrales API-Gateway und Telemetrieportal zur Überwachung verteilter Microservices mit dynamischem Rate-Limiting, Token-Authentifizierung und Live-Metriken.',
        longDescription: 'Architektur eines Cloud-nativen Gateways zur Konsolidierung von über 30 internen Microservices unter einer einheitlichen REST- und GraphQL-Schnittstelle. Mit automatischer API-Dokumentation, rollenbasierter JWT-Validierung und interaktivem React-Dashboard.',
        architectureBreakdown: [
          {
            title: 'Asynchrones Python FastAPI Gateway',
            description: 'Hochdurchsatzfähiger async ASGI-Router mit nicht-blockierendem I/O und automatischer Schemavalidierung.'
          },
          {
            title: 'JWT Auth & RBAC Sicherheitsschicht',
            description: 'Kryptografische Token-Verifikation mit Claim-Prüfung und automatisierter API-Schlüssel-Kontingentierung.'
          },
          {
            title: 'React Analytics Dashboard',
            description: 'Interaktives Telemetrieportal mit Zeitreihen-Visualisierung via Recharts, Fehlerlog-Suche und Latenzalarmen.'
          }
        ],
        metrics: [
          { label: 'Routing-Overhead', value: '1.4ms', change: 'Keine Engpässe' },
          { label: 'Tägliche Anfragen', value: '12M+', change: 'Autoskaliert auf AWS ECS' },
          { label: 'Sicherheitsüberprüfung', value: '100%', change: 'Strikte Schema-Prüfung' }
        ],
        tags: ['PYTHON', 'FASTAPI', 'REACT', 'GRAPHQL', 'DOCKER', 'AWS'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI_4N4B6DrUPEtPxjvRTLELMwb7Et7h3TlbSbv_FFkLzo6kk4oDQy5tJn-z2AB-jDHuJx7zgGa5x5BwFsZc97tKzLkudnKMkedBG7l0fl6N_jDtC0LfniNYGlnlGg6jHeZ0dKmmqhVZ9EwFf4Api-G0TkJqo9PE-3boWoNIvUTDDPnaAleeGLAuONNUiguquFaL1rrQw7-94wVHhb87BktXju2gQCHVxLx4Je7_QTRwQ4EcnUgmoc',
        imageAlt: 'Monochromes Rendering von Netzwerkknoten und Microservice-Topologien.',
        codeLanguage: 'typescript',
        codeSnippet: `// Fast API Gateway Reverse Proxy & Rate Limiter Handler
export async function authenticateAndProxy(
  req: IncomingMessage,
  res: ServerResponse,
  targetServiceUrl: string
): Promise<void> {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token || !verifyJwtSignature(token)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Unautorisierter Gateway-Zugriff' }));
  }

  // Token Bucket Rate Limiter Prüfung (100 Anfr. / Min.)
  const clientIp = req.socket.remoteAddress || 'unknown';
  const allowed = await rateLimiter.consume(clientIp, 1);
  if (!allowed) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Zu viele Anfragen' }));
  }

  return proxyRequest(req, res, targetServiceUrl);
}`
      },
      {
        id: 'design-system-component-registry',
        title: 'DESIGN SYSTEM & KOMPONENTEN-REGISTRY',
        subtitle: 'Modulares TypeScript Monorepo & UI-Komponentenbibliothek',
        description: 'Unternehmensweites Fullstack-Designsystem für über 25 Entwickler auf mehreren Webplattformen. Automatisierte Token-Pipelines, Storybook und CI/CD-Publishing.',
        longDescription: 'Einheitliches Designsystem-Paket basierend auf Turborepo, TypeScript, Tailwind CSS und Storybook mit semantischer Versionierung und automatisierter Barrierefreiheitsprüfung (WCAG 2.1 AA).',
        architectureBreakdown: [
          {
            title: 'Design-Token Compiler',
            description: 'Konvertiert Figma-Designvariablen in strikte CSS Custom Properties und typisierte TypeScript-Themes.'
          },
          {
            title: 'Barrierefreie Headless-Komponenten',
            description: 'Tastaturnavigierbare, Screenreader-geprüfte UI-Komponenten auf Basis von Radix-Primitiven und Tailwind CSS.'
          },
          {
            title: 'Monorepo & CI/CD-Automatisierung',
            description: 'Turborepo-Workspace mit Linting, visuellen Regressionstests und automatischer Changelog-Erstellung.'
          }
        ],
        metrics: [
          { label: 'Entwickler-Adoption', value: '100%', change: '25+ Entwickler aktiv' },
          { label: 'Barrierefreiheit', value: '100/100', change: 'Vollständige WCAG AA Konformität' },
          { label: 'Bundle-Größe', value: '0.9 KB Ø', change: 'Vollständig Tree-shakeable' }
        ],
        tags: ['TYPESCRIPT', 'REACT', 'TAILWIND CSS', 'STORYBOOK', 'TURBOREPO'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7sx7jWkSG38vsTPQB0p1h0MPMAHD_fVJKdQhmHF_-weJkWtVg7F10iXvsN3JFHvBkRwmhA7qjrzNJJS8XUcuyL9IPYf7Z55PWO1TqbV5qRvIXaq95Z2SLKcdNVOsJyCjtJlOmFLm-TiPg5tPQd6l3GPylKG23jkM2-spBy1WsKe0sAjPV7m-2jOQnFHliZA823PgrNhbcnGYQyQ0sSBBtFFGF2-UNvknN6_ny1npY9JjMLHOC0No',
        imageAlt: 'Monochromes technisches Raster mit modularen UI-Komponenten.',
        codeLanguage: 'typescript',
        codeSnippet: `// Polymorphic Component Factory with Strict Type Enforcement
export type PolymorphicProps<E extends React.ElementType, P = {}> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E;
  };

export const Button = React.forwardRef(
  <E extends React.ElementType = 'button'>(
    { as, className, variant = 'primary', ...props }: PolymorphicProps<E, ButtonProps>,
    ref: React.Ref<Element>
  ) => {
    const Component = as || 'button';
    const styles = getButtonVariantStyles(variant);
    return <Component ref={ref} className={cn(styles, className)} {...props} />;
  }
);`
      }
    ],
    experiences: [
      {
        id: 'exp-1',
        period: '2022 — HEUTE',
        role: 'Senior Fullstack Software-Entwickler',
        company: 'Nexus Cloud Labs',
        location: 'San Francisco, CA / Remote',
        description: 'Leitung von Fullstack-Architekturen für Enterprise-SaaS-Plattformen. Konzeption verteilter Node.js/TypeScript-Microservices, moderner React/Next.js-Clients und skalierbarer PostgreSQL-Datenbankschemata.',
        bullets: [
          'Architektur von End-to-End Webplattformen für über 10 Mio. monatliche Nutzerinteraktionen mit 99,99% Systemverfügbarkeit.',
          'Aufbau einer internen React-Komponentenbibliothek, Beschleunigung der Feature-Auslieferung um 35% in 5 Produktteams.',
          'Optimierung von Backend-APIs und Datenbank-Indizes, Reduktion der p95-Latenz von 380 ms auf 65 ms.',
          'Implementierung automatisierter CI/CD-Pipelines mit GitHub Actions, Docker und AWS ECS.'
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
      },
      {
        id: 'exp-2',
        period: '2019 — 2022',
        role: 'Fullstack Software-Ingenieur',
        company: 'Veloce Digital Systems',
        location: 'Austin, TX / Hybrid',
        description: 'Entwicklung performanter Webanwendungen, Kundenportale und RESTful/GraphQL-Backend-Dienste. Leitung von Frontend-State-Migrationen und Microservice-Integrationen.',
        bullets: [
          'Entwicklung reaktiver, barrierefreier Single-Page-Anwendungen mit React, TypeScript und Tailwind CSS.',
          'Aufbau skalierbarer REST- und GraphQL-APIs mit Node.js/Express und Python FastAPI.',
          'Integration von Zahlungs-Gateways (Stripe), Auth-Providern (OAuth, JWT) und Webhook-Diensten.',
          'Etablierung automatisierter Teststandards mit Jest und Playwright, Erzielung von 92% Testabdeckung.'
        ],
        techStack: ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Stripe']
      },
      {
        id: 'exp-3',
        period: '2017 — 2019',
        role: 'Fullstack Web-Entwickler',
        company: 'ByteCraft Interactive',
        location: 'Remote',
        description: 'Entwicklung moderner Fullstack-Webprodukte für wachstumsstarke Startups. Spezialisiert auf die pixelgenaue Umsetzung von Figma-Designs in performante Interfaces mit robusten Backend-APIs.',
        bullets: [
          'Migration monolithischer Altanwendungen in entkoppelte React- und Node.js-REST-Architekturen.',
          'Entwurf relationaler Datenmodelle in PostgreSQL und MongoDB mit Caching- und Indexierungsstrategien.',
          'Umsetzung responsiver, barrierefreier Interfaces unter strikter Einhaltung von Designsystemen und SEO-Vorgaben.'
        ],
        techStack: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
      }
    ],
    skillCategories: [
      {
        title: 'Frontend Engineering',
        code: 'FRONT_01',
        description: 'Moderne reaktive Frameworks, Designsysteme und responsive Web-Performance.',
        skills: [
          { name: 'React 18/19 & Next.js', level: 98, focus: 'Server Components, SSR/SSG, Hooks, App Router' },
          { name: 'TypeScript Strict Mode', level: 96, focus: 'Generics, Typsicherheit, API-Vertragstypisierung' },
          { name: 'Tailwind CSS & Designsysteme', level: 95, focus: 'Responsive Layouts, Design Tokens, Barrierefreiheit (a11y)' },
          { name: 'State Management & Web Vitals', level: 94, focus: 'Zustand, TanStack Query, optimistisches UI, LCP < 1s' }
        ]
      },
      {
        title: 'Backend & APIs',
        code: 'BACK_02',
        description: 'Skalierbare Server-Runtimes, REST/GraphQL-APIs und asynchrone Message Queues.',
        skills: [
          { name: 'Node.js & Express / NestJS', level: 95, focus: 'REST-Architekturen, Middlewares, asynchrone Pipelines' },
          { name: 'Python & FastAPI', level: 88, focus: 'Hochdurchsatz-Microservices, Hintergrund-Worker' },
          { name: 'GraphQL & WebSockets', level: 92, focus: 'Apollo Server, Echtzeit-Synchronisation, Federation' },
          { name: 'Auth & API-Sicherheit', level: 93, focus: 'OAuth2, JWT, Rate-Limiting, Rollen-Zugriffskontrolle (RBAC)' }
        ]
      },
      {
        title: 'Datenbanken & ORMs',
        code: 'DATA_03',
        description: 'Relationales Datenmodellieren, In-Memory-Caches und Abfrageoptimierung.',
        skills: [
          { name: 'PostgreSQL & SQL', level: 94, focus: 'Schema-Design, Indizierung, Transaktionen, Read-Replicas' },
          { name: 'Redis Caching & Pub/Sub', level: 91, focus: 'Session-Stores, Rate-Limiter, verteilter Zustand' },
          { name: 'Prisma & Drizzle ORM', level: 93, focus: 'Typsichere Migrationen und Relationen' },
          { name: 'MongoDB & NoSQL', level: 87, focus: 'Dokumentenmodellierung, Aggregationspipelines' }
        ]
      },
      {
        title: 'DevOps & Cloud',
        code: 'CLOUD_04',
        description: 'Containerisierung, Continuous-Delivery-Pipelines und Cloud-Hosting.',
        skills: [
          { name: 'Docker & Containerisierung', level: 90, focus: 'Multi-Stage-Builds, Docker Compose, Netzwerke' },
          { name: 'AWS & Cloud-Hosting', level: 89, focus: 'ECS, S3, Lambda, CloudFront, Vercel-Deployments' },
          { name: 'CI/CD-Automatisierung (GitHub Actions)', level: 92, focus: 'Test-Runner, Linting, automatisierte Deployments' },
          { name: 'Monitoring & Observability', level: 87, focus: 'Strukturiertes Logging, Error-Tracking, OpenTelemetry' }
        ]
      }
    ],
    ui: {
      nav: {
        studio: 'Studio',
        projects: 'Projekte',
        about: 'Über mich',
        skills: 'Kompetenzen',
        timeline: 'Werdegang',
        inquiry: 'Kontakt aufnehmen'
      },
      hero: {
        badge: 'STANLEE_NM // FULLSTACK SOFTWARE-ENTWICKLUNG',
        headlineFirst: 'Fullstack',
        headlineSecond: 'Ingenieurskunst',
        viewProjects: 'Projekte entdecken',
        getInTouch: 'Kontakt aufnehmen',
        featuredBadge: 'AUSGEWÄHLTE ARBEIT 01 // PRODUKTIONSARCHITEKTUR',
        featuredSubtitle: 'Next.js 14 // Node.js // PostgreSQL // Stripe',
        pillar1Title: '01 / Fullstack-Präzision',
        pillar1Desc: 'Durchgängige Ingenieursarbeit: typsichere Verträge, effiziente Datenpipelines und reaktive Client-Zustandssynchronisation.',
        pillar2Title: '02 / Skalierbare Systeme',
        pillar2Desc: 'Containerisierte Microservices und automatisierte CI/CD-Pipelines für maximale Lastspitzen und minimale Latenz.',
        pillar3Title: '03 / Schnittstellen-Feinschliff',
        pillar3Desc: 'Typografische Klarheit, barrierefreie Interaktionsmuster (WCAG AA) und flüssige Animationen für intuitive Workflows.'
      },
      projectsSection: {
        tag: '02 // AUSGEWÄHLTE WERKE & PRODUKTIONSARCHITEKTUR',
        title: 'Projekt',
        titleSub: 'Archiv',
        desc: 'Ausgewählte Fullstack-Webanwendungen, Microservices und verteilte Datensysteme, entwickelt für höchste Zuverlässigkeit und Performance.',
        viewCaseStudy: 'Fallstudie ansehen',
        architectureSpec: 'ARCHITEKTUR-SPEZIFIKATION // FALLSTUDIE',
        systemMetrics: 'SYSTEM-METRIKEN // BENCHMARKS',
        verifiedLive: 'IN PRODUKTION VERIFIZIERT',
        verifiedMetrics: 'VERIFIZIERTE METRIKEN // PRODUKTIONS-TELEMETRIE',
        readTime: 'Min. Lesezeit'
      },
      aboutSection: {
        badge: '03 // ÜBER MICH & PHILOSOPHIE',
        portraitLabel: 'PORTRÄT // STANLEE NWOSU',
        cvButton: 'Lebenslauf / CV',
        headlineFirst: 'Entwicklung &',
        headlineSecond: 'Ausführung',
        careerTimeline: 'Beruflicher',
        careerTimelineSub: 'Werdegang',
        chronologyBadge: '04 // CHRONOLOGIE'
      },
      skillsSection: {
        badge: '05 // TECHNISCHE KOMPETENZEN',
        headlineFirst: 'System',
        headlineSecond: 'Fähigkeiten',
        desc: 'Expertise in modernen Frontend-Architekturen, Backend-Microservices, Datenbank-Design und Cloud-Infrastruktur.',
        competencyScale: 'KOMPETENZ-SKALA',
        scaleDesc: 'Fundiert in produktionserprobten Deployments, strikter Typisierung und Systemen mit hoher Parallelität.'
      },
      contactSection: {
        tag: '06 // DIREKTE KORRESPONDENZ',
        headlineFirst: 'Dialog',
        headlineSecond: 'Starten',
        desc: 'Offen für Positionen in der Fullstack Software-Entwicklung, technische Beratung und anspruchsvolle Projekte.',
        formName: 'Vollständiger Name',
        formEmail: 'E-Mail-Adresse',
        formSubject: 'Art der Anfrage / Projekt',
        formMessage: 'Nachricht & Spezifikationen',
        formNamePlaceholder: 'z.B. Alex Müller',
        formEmailPlaceholder: 'alex@unternehmen.de',
        formMessagePlaceholder: 'Beschreiben Sie Ihr Projekt, technische Anforderungen oder die offene Stelle...',
        sendButton: 'Anfrage Absenden',
        submit: 'Anfrage Absenden',
        sendingButton: 'Wird gesendet...',
        successTitle: 'Anfrage Übermittelt',
        successDesc: 'Vielen Dank für Ihre Kontaktaufnahme. Ihre Nachricht wurde empfangen; ich werde mich zeitnah zurückmelden.',
        directChannels: 'DIREKTE KANÄLE',
        copied: 'In die Zwischenablage kopiert'
      },
      projectModal: {
        tag: 'ARCHITEKTUR-SPEZIFIKATION // FALLSTUDIE',
        overviewTitle: '01 // SYSTEMÜBERSICHT',
        subsystemsTitle: '02 // ARCHITEKTUR-SUBSYSTEME',
        verifiedStack: 'VERIFIZIERTE STACK-KOMPATIBILITÄT',
        inspectSource: 'Quellcode-Implementierung einsehen',
        returnBtn: 'Zurück zum Portfolio'
      },
      codeModal: {
        title: 'LOGIK-SPEZIFIKATION',
        copied: 'Kopiert',
        copy: 'Code kopieren',
        benchmarked: 'BENCHMARKED & TYPSICHER',
        dismiss: 'Schließen'
      },
      resumeModal: {
        title: 'Lebenslauf / Curriculum Vitae',
        verifiedTag: 'CURRICULUM VITAE // VERIFIZIERTES PROFIL',
        headerTag: 'CURRICULUM VITAE // VERIFIZIERTE SPEZIFIKATION',
        downloadPdf: 'JSON / Spezifikation herunterladen',
        printCv: 'Drucken / Als PDF speichern',
        downloaded: 'Gedruckt / Gespeichert',
        preparing: 'Wird vorbereitet...',
        printPdf: 'Drucken / PDF Exportieren',
        copied: 'Kopiert',
        copyDirect: 'E-Mail kopieren',
        summaryHeading: 'Berufliches Profil',
        summaryTitle: '01 // BERUFLICHES PROFIL',
        competencyHeading: 'Kernkompetenzen & Technologien',
        experienceHeading: 'Berufliche Laufbahn',
        experienceTitle: '02 // BERUFLICHER WERDEGANG',
        skillsTitle: '03 // TECHNISCHE MATRIX',
        educationHeading: 'Ausbildung & Studium',
        educationDegree: 'B.Sc. in Informatik & Software Engineering',
        educationSchool: 'Technische Universität / Institut für Technologie',
        educationPeriod: '2013 — 2017',
        close: 'Spezifikation Schließen'
      },
      footer: {
        tagline: 'Fullstack Software-Entwicklung & Cloud Engineering',
        rights: '© 2026 STANLEE_NM // ALLE RECHTE VORBEHALTEN',
        scrollTop: 'Nach oben',
        ascend: 'Nach oben ↑'
      },
      langSwitcher: {
        toggleLabel: 'Sprache',
        currentLabel: 'DE'
      }
    }
  }
};
