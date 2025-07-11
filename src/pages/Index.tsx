import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import nudgeDeskImage from '@/images/nudge-desk.jpg';
import nudgeAppImage from '@/images/nudge-app.png';
import nudgeDetectorImage from '@/images/nudge-detector.png';
import nudgeLogo from '@/images/nudge-logo.png';
import { 
  Smartphone, 
  Monitor, 
  Zap, 
  Brain, 
  Globe, 
  ArrowRight, 
  Download,
  Play,
  Rss,
  Bot,
  Network,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  ChevronDown,
  Sun,
  Moon,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Radio,
  Newspaper,
  Filter,
  Database,
  Server,
  Cloud,
  Wifi,
  HardDrive,
  Activity,
  BarChart,
  Cpu,
  Layers,
  Lock,
  Search,
  AlertTriangle
} from 'lucide-react';

const socialPlatforms = [
  { name: 'Twitter', icon: Twitter, color: 'text-blue-400', position: { top: '10%', left: '15%' } },
  { name: 'Facebook', icon: Facebook, color: 'text-blue-600', position: { top: '15%', left: '25%' } },
  { name: 'Instagram', icon: Instagram, color: 'text-pink-500', position: { top: '5%', left: '35%' } },
  { name: 'YouTube', icon: Youtube, color: 'text-red-500', position: { top: '20%', left: '45%' } },
  { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', position: { top: '8%', left: '55%' } },
  { name: 'Reddit', icon: MessageCircle, color: 'text-orange-500', position: { top: '12%', left: '65%' } },
  { name: 'TikTok', icon: Radio, color: 'text-purple-500', position: { top: '18%', left: '75%' } },
  { name: 'Discord', icon: MessageCircle, color: 'text-indigo-500', position: { top: '6%', left: '85%' } },
];

const newsPlatforms = [
  { name: 'BBC', icon: Radio, color: 'text-red-600', position: { bottom: '15%', left: '10%' } },
  { name: 'CNN', icon: Newspaper, color: 'text-red-700', position: { bottom: '20%', left: '20%' } },
  { name: 'Reuters', icon: Globe, color: 'text-blue-500', position: { bottom: '10%', left: '30%' } },
  { name: 'AP News', icon: Rss, color: 'text-green-600', position: { bottom: '25%', left: '40%' } },
  { name: 'NYTimes', icon: Newspaper, color: 'text-gray-300', position: { bottom: '12%', left: '50%' } },
  { name: 'Guardian', icon: Globe, color: 'text-blue-600', position: { bottom: '18%', left: '60%' } },
  { name: 'WSJ', icon: Newspaper, color: 'text-yellow-600', position: { bottom: '8%', left: '70%' } },
  { name: 'Forbes', icon: TrendingUp, color: 'text-green-500', position: { bottom: '22%', left: '80%' } },
];

const cloudServices = [
  { name: 'AWS', icon: Database, color: 'text-orange-500', position: { top: '30%', left: '5%' } },
  { name: 'Google Cloud', icon: Network, color: 'text-blue-500', position: { top: '40%', left: '8%' } },
  { name: 'Azure', icon: Database, color: 'text-blue-600', position: { top: '50%', left: '3%' } },
  { name: 'MongoDB', icon: Database, color: 'text-green-500', position: { top: '60%', left: '7%' } },
  { name: 'Redis', icon: Server, color: 'text-red-400', position: { top: '35%', left: '2%' } },
];

const apiServices = [
  { name: 'REST API', icon: Network, color: 'text-green-500', position: { top: '25%', right: '5%' } },
  { name: 'GraphQL', icon: Network, color: 'text-purple-500', position: { top: '35%', right: '8%' } },
  { name: 'WebSocket', icon: Wifi, color: 'text-blue-400', position: { top: '45%', right: '3%' } },
  { name: 'gRPC', icon: Network, color: 'text-yellow-500', position: { top: '55%', right: '7%' } },
  { name: 'Kafka', icon: Activity, color: 'text-orange-400', position: { top: '65%', right: '4%' } },
];

const processingNodes = [
  { name: 'ML Model', icon: Brain, color: 'text-purple-400', position: { top: '25%', left: '20%' } },
  { name: 'NLP Engine', icon: Bot, color: 'text-cyan-400', position: { top: '35%', left: '80%' } },
  { name: 'Analytics', icon: BarChart, color: 'text-green-400', position: { top: '45%', left: '25%' } },
  { name: 'Cache', icon: HardDrive, color: 'text-yellow-400', position: { top: '55%', left: '75%' } },
  { name: 'Security', icon: Lock, color: 'text-red-400', position: { top: '65%', left: '30%' } },
  { name: 'Search', icon: Search, color: 'text-blue-300', position: { top: '75%', left: '70%' } },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-firebase-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="items-center justify-center">
              <img src={nudgeLogo} alt="Nudge Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-2xl font-roboto-bold google-gradient">Nudge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors font-roboto-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('workflow')}
              className="text-muted-foreground hover:text-foreground transition-colors font-roboto-medium"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('apps')}
              className="text-muted-foreground hover:text-foreground transition-colors font-roboto-medium"
            >
              Apps
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-roboto-medium">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 px-4 py-2 font-roboto-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-roboto-bold mb-6 leading-tight google-gradient">
              News Intelligence <br></br>Redefined
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-roboto-regular">
              Nudge harnesses the power of AI to intelligently curate, analyze, and deliver 
              personalized news experiences across all your devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href='https://github.com/chiragferwani/nudge-app'>
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground font-roboto-medium px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              </a>
              <a
                href="https://youtu.be/eksTIglq-Ow"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex' }}
              >
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent/10 px-8 py-4 text-lg font-roboto-medium">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </a>
            </div>
          </div>

          {/* Enhanced Floating News Cards Animation */}
          <div className="relative mt-16 h-64">
            {[
              { title: "AI Breakthrough", source: "TechCrunch", delay: 0 },
              { title: "Market Update", source: "Bloomberg", delay: 2 },
              { title: "Climate News", source: "Reuters", delay: 4 },
              { title: "Space Discovery", source: "NASA", delay: 6 },
              { title: "Health Research", source: "Nature", delay: 1 },
              { title: "Crypto Analysis", source: "CoinDesk", delay: 3 },
              { title: "Tech Innovation", source: "Wired", delay: 5 },
              { title: "Global Politics", source: "BBC", delay: 7 }
            ].map((news, i) => (
              <div
                key={i}
                className="absolute minimalist-card rounded-lg p-4 w-48 animate-float"
                style={{
                  left: `${5 + (i % 4) * 22}%`,
                  top: `${10 + Math.floor(i / 4) * 40}%`,
                  animationDelay: `${news.delay}s`
                }}
              >
                <div className="text-sm font-roboto-medium text-firebase-orange">{news.source}</div>
                <div className="text-xs text-muted-foreground mt-1 font-roboto-regular">{news.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-roboto-bold mb-6 google-gradient">
              Intelligent Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-roboto-regular">
              Experience news consumption like never before with our AI-powered features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Curation",
                description: "Advanced machine learning algorithms analyze thousands of sources to deliver personalized news that matters to you."
              },
              {
                icon: Zap,
                title: "Real-time Intelligence",
                description: "Get instant updates and breaking news with contextual analysis and relevance scoring."
              },
              {
                icon: Shield,
                title: "Bias Detection",
                description: "Our AI identifies potential bias and provides multiple perspectives on every story."
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Spot emerging trends and topics before they become mainstream news."
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Access news from thousands of sources worldwide in over 50 languages."
              },
              {
                icon: Clock,
                title: "Smart Scheduling",
                description: "AI learns your reading habits and delivers news at optimal times."
              }
            ].map((feature, i) => (
              <Card key={i} className="minimalist-card p-6 hover:scale-105 transition-all duration-300">
                <div className="google-border w-12 h-12 rounded-lg mb-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-roboto-medium mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-roboto-regular">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Workflow Section */}
      <section id="workflow" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-roboto-bold mb-6 google-gradient">
              How Nudge Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-roboto-regular">
              See how our AI-powered workflow transforms raw information into intelligent insights
            </p>
          </div>

          {/* Enhanced Data Flow Visualization with Static Mesh Network */}
          <div className="mb-16 relative">
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-7xl h-96">
                {/* SVG for static connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="8"
                      markerHeight="6"
                      refX="7"
                      refY="3"
                      orient="auto"
                      className="arrow-marker"
                    >
                      <polygon points="0 0, 8 3, 0 6" />
                    </marker>
                  </defs>
                  
                  {/* Static connection lines from social platforms to center */}
                  {socialPlatforms.map((platform, i) => {
                    const startX = platform.position.left;
                    const startY = platform.position.top;
                    return (
                      <line
                        key={`social-${i}`}
                        x1={startX}
                        y1={startY}
                        x2="50%"
                        y2="50%"
                        className="connection-arrow"
                      />
                    );
                  })}
                  
                  {/* Static connection lines from news platforms to center */}
                  {newsPlatforms.map((platform, i) => {
                    const startX = platform.position.left;
                    const startY = `calc(100% - ${platform.position.bottom})`;
                    return (
                      <line
                        key={`news-${i}`}
                        x1={startX}
                        y1={startY}
                        x2="50%"
                        y2="50%"
                        className="connection-arrow"
                      />
                    );
                  })}
                  
                  {/* Static connection lines from cloud services to center */}
                  {cloudServices.map((service, i) => {
                    const startX = service.position.left;
                    const startY = service.position.top;
                    return (
                      <line
                        key={`cloud-${i}`}
                        x1={startX}
                        y1={startY}
                        x2="50%"
                        y2="50%"
                        className="connection-arrow"
                      />
                    );
                  })}
                  
                  {/* Static connection lines from API services to center */}
                  {apiServices.map((api, i) => {
                    const startX = `calc(100% - ${api.position.right})`;
                    const startY = api.position.top;
                    return (
                      <line
                        key={`api-${i}`}
                        x1={startX}
                        y1={startY}
                        x2="50%"
                        y2="50%"
                        className="connection-arrow"
                      />
                    );
                  })}
                  
                  {/* Static connection lines from processing nodes to center */}
                  {processingNodes.map((node, i) => {
                    const startX = node.position.left;
                    const startY = node.position.top;
                    return (
                      <line
                        key={`process-${i}`}
                        x1={startX}
                        y1={startY}
                        x2="50%"
                        y2="50%"
                        className="connection-arrow"
                      />
                    );
                  })}
                </svg>

                {/* Central AI Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="google-border w-24 h-24 rounded-full">
                    <div className="w-full h-full flex items-center justify-center">
                      <Brain className="w-12 h-12 text-foreground animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-sm font-roboto-medium google-gradient">AI Engine</div>
                    <div className="text-xs text-muted-foreground font-roboto-light">Neural Processing Hub</div>
                  </div>
                </div>

                {/* All platform icons with improved positioning */}
                {socialPlatforms.map((platform, i) => (
                  <div 
                    key={i} 
                    className="absolute platform-icon text-center floating-data-node z-10" 
                    style={{ 
                      ...platform.position,
                      animationDelay: `${i * 0.3}s` 
                    }}
                  >
                    <div className="minimalist-card p-2 rounded-xl backdrop-blur-sm">
                      <platform.icon className={`w-5 h-5 mx-auto ${platform.color}`} />
                      <p className="text-xs mt-1 font-roboto-regular text-muted-foreground">{platform.name}</p>
                    </div>
                  </div>
                ))}

                {newsPlatforms.map((platform, i) => (
                  <div 
                    key={i} 
                    className="absolute platform-icon text-center floating-data-node z-10" 
                    style={{ 
                      ...platform.position,
                      animationDelay: `${i * 0.4}s` 
                    }}
                  >
                    <div className="minimalist-card p-2 rounded-xl backdrop-blur-sm">
                      <platform.icon className={`w-5 h-5 mx-auto ${platform.color}`} />
                      <p className="text-xs mt-1 font-roboto-regular text-muted-foreground">{platform.name}</p>
                    </div>
                  </div>
                ))}

                {cloudServices.map((service, i) => (
                  <div 
                    key={i} 
                    className="absolute platform-icon text-center floating-data-node z-10" 
                    style={{ 
                      ...service.position,
                      animationDelay: `${i * 0.2}s` 
                    }}
                  >
                    <div className="minimalist-card p-2 rounded-xl backdrop-blur-sm">
                      <service.icon className={`w-5 h-5 mx-auto ${service.color}`} />
                      <p className="text-xs mt-1 font-roboto-regular text-muted-foreground">{service.name}</p>
                    </div>
                  </div>
                ))}

                {apiServices.map((api, i) => (
                  <div 
                    key={i} 
                    className="absolute platform-icon text-center api-pulse z-10" 
                    style={{ 
                      ...api.position,
                      animationDelay: `${i * 0.5}s` 
                    }}
                  >
                    <div className="minimalist-card p-2 rounded-xl backdrop-blur-sm">
                      <api.icon className={`w-5 h-5 mx-auto ${api.color}`} />
                      <p className="text-xs mt-1 font-roboto-regular text-muted-foreground">{api.name}</p>
                    </div>
                  </div>
                ))}

                {processingNodes.map((node, i) => (
                  <div 
                    key={i} 
                    className="absolute platform-icon text-center floating-data-node z-10" 
                    style={{ 
                      ...node.position,
                      animationDelay: `${i * 0.6}s` 
                    }}
                  >
                    <div className="minimalist-card p-2 rounded-xl backdrop-blur-sm">
                      <node.icon className={`w-4 h-4 mx-auto ${node.color}`} />
                      <p className="text-xs mt-1 font-roboto-regular text-muted-foreground">{node.name}</p>
                    </div>
                  </div>
                ))}

                {/* Enhanced Floating Data Particles */}
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full floating-data-node"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}

                {/* Data Flow Indicators */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent/60 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1.5 + Math.random() * 1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Processing Steps */}
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Data Collection",
                  description: "APIs automatically fetch articles from 10,000+ sources",
                  icon: Database
                },
                {
                  step: "02",
                  title: "AI Processing",
                  description: "Neural networks analyze content for relevance and sentiment",
                  icon: Brain
                },
                {
                  step: "03",
                  title: "Smart Filtering",
                  description: "Machine learning removes duplicates and ranks by importance",
                  icon: Filter
                },
                {
                  step: "04",
                  title: "Personalized Delivery",
                  description: "Curated news delivered to your preferred devices",
                  icon: Zap
                }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="workflow-step rounded-xl p-6 mb-4 hover:scale-105 transition-all duration-300">
                    <div className="rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="font-mono google-gradient font-roboto-medium mb-2">{step.step}</div>
                    <h3 className="text-lg font-roboto-medium mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-roboto-regular">{step.description}</p>
                  </div>
                  
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section id="apps" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-roboto-bold mb-6 google-gradient">
              Available Everywhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-roboto-regular">
              Access Nudge on all your devices with our native applications and AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Android App */}
            <div className="app-showcase rounded-2xl p-8 animate-slide-in-right">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-roboto-bold">Android App</h3>
              </div>
              
              <div className="mb-6 rounded-lg h-48 overflow-hidden border border-primary/20">
                <img 
                  src={nudgeAppImage} 
                  alt="Nudge Android App Screenshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground font-roboto-regular">
                  Native Android experience with offline reading, push notifications, 
                  and seamless synchronization across devices.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Offline reading capabilities
                  </li>
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Smart push notifications
                  </li>
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Dark mode optimization
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/chiragferwani/nudge-app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-roboto-medium flex items-center justify-center rounded-md px-4 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                style={{ display: 'inline-flex' }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download for Android
              </a>
            </div>

            {/* Desktop App */}
            <div className="app-showcase rounded-2xl p-8 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <Monitor className="w-8 h-8 text-accent-foreground mr-3" />
                <h3 className="text-2xl font-roboto-bold">Desktop App</h3>
              </div>
              
              <div className="mb-6 rounded-lg h-48 overflow-hidden border border-accent-foreground/20">
                <img 
                  src={nudgeDeskImage} 
                  alt="Nudge Desktop App Screenshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground font-roboto-regular">
                  Powerful desktop application for in-depth analysis, research tools, 
                  and advanced filtering capabilities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mr-3"></div>
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mr-3"></div>
                    Multi-window support
                  </li>
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mr-3"></div>
                    Keyboard shortcuts
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/chiragferwani/nudge-ai-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 font-roboto-medium flex items-center justify-center rounded-md px-4 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 border"
                style={{ display: 'inline-flex' }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download for Desktop
              </a>
            </div>

            {/* Fake News Detection System */}
            <div className="app-showcase rounded-2xl p-8 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
                <h3 className="text-2xl font-roboto-bold">Fake News Detection</h3>
              </div>
              
              <div className="mb-6 rounded-lg h-48 overflow-hidden border border-destructive/20">
                <img 
                  src={nudgeDetectorImage} 
                  alt="Nudge Fake News Detection Screenshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground font-roboto-regular">
                  Python-powered AI web application that analyzes news articles 
                  and provides comprehensive fake news detection statistics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                    Real-time fact checking
                  </li>
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                    Credibility scoring
                  </li>
                  <li className="flex items-center font-roboto-regular">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                    Source verification
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/chiragferwani/nudge-detector"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-destructive hover:bg-destructive/80 text-destructive-foreground font-roboto-medium flex items-center justify-center rounded-md px-4 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-destructive/50"
                style={{ display: 'inline-flex' }}
              >
                <Shield className="w-4 h-4 mr-2" />
                Try Detection Tool
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="cta-section rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-roboto-bold mb-6 google-gradient">
              Ready to Transform Your News Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-roboto-regular">
              Join thousands of users who have already upgraded to intelligent news consumption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href='https://github.com/chiragferwani/nudge-app'>
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground font-roboto-medium px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              </a>
              <a
                href="https://youtu.be/eksTIglq-Ow"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex' }}
              >
                <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 px-8 py-4 text-lg font-roboto-medium">
                  Request Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex items-center justify-center">
                <img src={nudgeLogo} alt="Nudge Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-roboto-bold google-gradient">Nudge</span>
            </div>
            
            <div className="text-muted-foreground text-center md:text-right">
              <p className="font-roboto-regular">&copy; 2024 Nudge AI. All rights reserved.</p>
              <a href='https://chiragferwani.vercel.app/'><p className="text-sm mt-1 font-roboto-light">Chirag Ferwani</p></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
