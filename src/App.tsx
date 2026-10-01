import { useState } from 'react'
import logo from './assets/reference.png'
import whatsappImg from './assets/whatsapp-hero.jpeg'
import CloudSky from './components/CloudSky'

const NAV_LINKS = ['About Us', 'Programmes', 'Gallery', 'Admissions', 'Contact']

const PROGRAMMES = [
  {
    level: 'Playgroup',
    age: 'Ages 2 – 3',
    desc: 'Sensory exploration, socialization, music, and motor skill development in a warm, nurturing space.',
    emoji: '🌱',
  },
  {
    level: 'PP1 (Pre-Primary 1)',
    age: 'Age 4',
    desc: 'CBC foundational areas: Language, Mathematical activities, Environmental, and Psychomotor skills.',
    emoji: '🎨',
  },
  {
    level: 'PP2 (Pre-Primary 2)',
    age: 'Age 5',
    desc: 'Phonics, early numeracy, social values, and creative expression preparing learners for Lower Primary.',
    emoji: '🌻',
  },
  {
    level: 'Lower Primary',
    age: 'Grade 1 – 3',
    desc: 'CBC Key Stage 1: Literacy, Kiswahili, English, Math, Hygiene & Nutrition, and Creative Arts.',
    emoji: '📚',
  },
  {
    level: 'Upper Primary',
    age: 'Grade 4 – 6',
    desc: 'CBC Key Stage 2: Science & Tech, Agriculture, Social Studies, Creative Arts, and Digital Literacy.',
    emoji: '🔬',
  },
]

const STATS = [
  { value: '500+', label: 'Happy pupils enrolled' },
  { value: '1:15', label: 'Teacher-to-pupil ratio' },
  { value: '20+', label: 'Years of excellence' },
  { value: '12', label: 'Extra-curricular clubs' },
]

const VALUES = [
  {
    title: 'Faith & Character',
    desc: 'We cultivate children of strong moral character, rooted in values of honesty, kindness, and integrity.',
    icon: '✝️',
  },
  {
    title: 'Holistic Learning',
    desc: 'Academics, arts, sports, and social development are woven together — we nurture the whole child.',
    icon: '🌍',
  },
  {
    title: 'Safe & Nurturing',
    desc: 'Every child deserves to feel safe and seen. Our environment is warm, inclusive, and child-centred.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    desc: 'We hold high aspirations for every pupil and equip them with skills to achieve their very best.',
    icon: '⭐',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Grace Seeds has been a blessing. My daughter wakes up excited to go to school every morning — that says everything.',
    name: 'Mrs. Abiodun Fatima',
    role: 'Parent, PP2',
    img: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=80&h=80&fit=crop&auto=format',
  },
  {
    quote: 'The teachers know every child by name and take time to understand how each one learns best. Truly exceptional.',
    name: 'Mr. Emeka Okafor',
    role: 'Parent, Grade 4',
    img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=80&h=80&fit=crop&auto=format',
  },
  {
    quote: 'My son joined shy and withdrawn. Within a term he was performing in the school play. The transformation is remarkable.',
    name: 'Mrs. Grace Mensah',
    role: 'Parent, Playgroup',
    img: 'https://images.unsplash.com/photo-1580894732930-0babd100d356?w=80&h=80&fit=crop&auto=format',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeT, setActiveT] = useState(0)

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#1f0a10]">

      {/* TOP BAR */}
      <div className="bg-[#5a1226] text-white text-xs py-2 px-6 text-center tracking-wide">
        📞 Admissions open for 2025/2026 — Call us: <span className="font-semibold">0745 436312</span>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#7b1c35] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Grace Seeds School crest" className="h-10 w-10 rounded-full object-cover bg-white p-0.5" />
            <div>
              <p style={{ fontFamily: 'Fraunces, serif' }} className="text-white font-semibold text-base leading-tight">Grace Seeds School</p>
              <p className="text-white/60 text-[10px] tracking-widest uppercase">School</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a key={link} href="#" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>

          <a href="#" className="hidden md:inline-flex bg-[#e8a92a] hover:bg-[#f5c84a] text-[#5a1226] font-bold text-sm px-6 py-2 rounded-full transition-colors duration-200 shadow">
            Enrol Now
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <div
          className={`md:hidden bg-[#5a1226] border-t border-white/10 px-6 transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${
            menuOpen ? 'max-h-96 py-4 opacity-100 gap-4' : 'max-h-0 py-0 opacity-0 pointer-events-none'
          }`}
        >
          {NAV_LINKS.map(link => (
            <a key={link} href="#" className="text-white/80 hover:text-white text-sm font-semibold">{link}</a>
          ))}
          <a href="#" className="bg-[#e8a92a] text-[#5a1226] font-bold text-sm px-6 py-3 rounded-full text-center mt-1">Enrol Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#5a1226]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&h=900&fit=crop&auto=format"
            alt="Happy Grace Seeds School children smiling together"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#e8a92a]/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8a92a]/20 border border-[#e8a92a]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#f5c84a] text-xs font-bold tracking-widest uppercase">CBC Model · Playgroup – Grade 6</span>
            </div>
            <h1 style={{ fontFamily: 'Fraunces, serif' }} className="text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5">
              The Future<br />
              <em className="text-[#f5c84a] not-italic">Begins Here</em>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-md mb-8">
              Grace Seeds School is a caring school where every child is celebrated, challenged, and equipped to grow — academically, morally, and joyfully.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-[#e8a92a] hover:bg-[#f5c84a] text-[#5a1226] font-bold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm shadow-lg">
                Apply for Admission
              </a>
              <a href="#" className="border border-white/40 hover:border-white/70 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm">
                Learn More →
              </a>
            </div>
          </div>

          {/* Logo crest card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center max-w-xs">
              <img src={logo} alt="Grace Seeds School crest" className="w-40 h-40 mx-auto object-contain mb-4" />
              <p style={{ fontFamily: 'Fraunces, serif' }} className="text-white text-xl font-semibold mb-1">Grace Seeds School</p>
              <p className="text-[#f5c84a] text-xs tracking-widest uppercase font-bold mb-4">G.S.S — School</p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/60 text-xs italic">"The Future Begins Here"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-[#7b1c35] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl font-bold text-[#f5c84a] mb-1">{s.value}</p>
              <p className="text-white/70 text-xs font-semibold tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-20 bg-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#f9eef1]">
              <img
                src="https://images.unsplash.com/photo-1786926274316-981cac2a2662?w=800&h=600&fit=crop&auto=format"
                alt="Grace Seeds pupils in school uniform drawing together"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div>
            <p className="text-[#7b1c35] text-xs font-bold tracking-widest uppercase mb-3">About Grace Seeds</p>
            <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl lg:text-5xl font-bold text-[#5a1226] leading-tight mb-5">
              A school where every<br />
              <em className="text-[#e8a92a] not-italic">seed flourishes</em>
            </h2>
            <p className="text-[#8a6470] text-base leading-relaxed mb-5">
              Founded on principles of faith and academic excellence, Grace Seeds School has been shaping young lives for over two decades. We believe every child is a seed of potential — and our role is to provide the rich soil, warmth, and care they need to grow.
            </p>
            <p className="text-[#8a6470] text-base leading-relaxed mb-8">
              Our dedicated teachers bring learning to life through activity-based methods, making every classroom a place of discovery, laughter, and growth.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-[#7b1c35] hover:bg-[#5a1226] text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm">
              Our Story →
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="py-20 bg-[#f9eef1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#7b1c35] text-xs font-bold tracking-widest uppercase mb-3">Academic Programmes</p>
            <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl lg:text-5xl font-bold text-[#5a1226] leading-tight">
              Growing together at<br />every stage
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROGRAMMES.map(p => (
              <div key={p.level} className="group bg-white hover:bg-[#7b1c35] border border-[#f0d8df] hover:border-[#7b1c35] rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl">
                <div className="text-3xl mb-4">{p.emoji}</div>
                <p className="text-[#e8a92a] text-xs font-bold tracking-widest uppercase mb-1 group-hover:text-[#f5c84a] transition-colors">{p.age}</p>
                <h3 style={{ fontFamily: 'Fraunces, serif' }} className="text-xl font-bold text-[#5a1226] group-hover:text-white transition-colors mb-3">{p.level}</h3>
                <p className="text-[#8a6470] group-hover:text-white/75 text-sm leading-relaxed transition-colors">{p.desc}</p>
                <div className="mt-5 text-[#7b1c35] group-hover:text-[#f5c84a] text-sm font-bold transition-colors">Find out more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[#5a1226]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#f5c84a] text-xs font-bold tracking-widest uppercase mb-3">Our Core Values</p>
            <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              What we stand for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-6 transition-all duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 style={{ fontFamily: 'Fraunces, serif' }} className="text-lg font-bold text-[#f5c84a] mb-3">{v.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20 bg-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[#7b1c35] text-xs font-bold tracking-widest uppercase mb-3">School Life</p>
              <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl font-bold text-[#5a1226] leading-tight">Every day is an adventure</h2>
            </div>
            <a href="#" className="text-[#7b1c35] font-bold text-sm hover:underline">View Full Gallery →</a>
          </div>

          {/* CloudSky Originkit Interactive Sky */}
          <div className="mb-6 rounded-3xl overflow-hidden shadow-lg relative h-64 lg:h-80">
            <CloudSky style={{ minWidth: 0, minHeight: 0, width: '100%', height: '100%' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a1226]/60 via-transparent to-transparent flex items-end p-6 pointer-events-none">
              <p className="text-white font-semibold text-base lg:text-lg drop-shadow">
                ☁️ Move your mouse to interact with the sky and clouds
              </p>
            </div>
          </div>

          {/* WhatsApp Image Replacing Previous Image Grid */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#f0d8df] bg-white">
            <img
              src={whatsappImg}
              alt="Grace Seeds School environment"
              className="w-full max-h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#f9eef1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[#7b1c35] text-xs font-bold tracking-widest uppercase mb-3">Parent Voices</p>
            <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl lg:text-5xl font-bold text-[#5a1226] leading-tight">
              What our families say
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                onClick={() => setActiveT(i)}
                className={`rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                  i === activeT
                    ? 'bg-[#7b1c35] border-[#7b1c35] shadow-xl'
                    : 'bg-white border-[#f0d8df] hover:border-[#c97a93]'
                }`}
              >
                <div className="text-3xl mb-4 text-[#e8a92a]">❝</div>
                <p style={{ fontFamily: 'Fraunces, serif' }} className={`text-lg italic leading-relaxed mb-5 transition-colors ${i === activeT ? 'text-white' : 'text-[#5a1226]'}`}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-[#f0d8df]" />
                  <div>
                    <p className={`text-sm font-bold transition-colors ${i === activeT ? 'text-white' : 'text-[#5a1226]'}`}>{t.name}</p>
                    <p className={`text-xs transition-colors ${i === activeT ? 'text-white/60' : 'text-[#8a6470]'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7b1c35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#e8a92a]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <img src={logo} alt="Grace Seeds School crest" className="w-20 h-20 mx-auto object-contain mb-6" />
          <p className="text-[#f5c84a] text-xs font-bold tracking-widest uppercase mb-4">Admissions 2025 / 2026</p>
          <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Enrol your child at<br />Grace Seeds today
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Spaces are filling fast for the new academic year. Join our family of learners and give your child the best possible start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-[#e8a92a] hover:bg-[#f5c84a] text-[#5a1226] font-bold px-8 py-4 rounded-full transition-colors duration-200 text-sm shadow-lg">
              Begin Application
            </a>
            <a href="tel:0745436312" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 text-sm">
              Call Us Today →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3d0c1a] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Grace Seeds School crest" className="h-10 w-10 rounded-full object-contain bg-white/10 p-1" />
                <div>
                  <p style={{ fontFamily: 'Fraunces, serif' }} className="text-white font-bold text-base leading-tight">Grace Seeds School</p>
                  <p className="text-white/50 text-[10px] tracking-widest uppercase">School</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">"The Future Begins Here"</p>
            </div>
            <div>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Quick Links</p>
              <ul className="space-y-2">
                {['About Us', 'Programmes', 'Admissions', 'Gallery', 'Contact Us'].map(l => (
                  <li key={l}><a href="#" className="text-white/50 hover:text-[#f5c84a] text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Contact</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li>📍 Kisumu, Kisian, KEMRI Road</li>
                <li>📞 0745 436312</li>
                <li>✉️ schoolgraceseeds@gmail.com</li>
                <li>🕗 Mon – Fri: 7:30 am – 3:30 pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">© 2025 Grace Seeds School. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Safeguarding', 'Terms of Use'].map(l => (
                <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

