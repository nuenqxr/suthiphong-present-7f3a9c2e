const slides = [
  {
    id: 'cover',
    no: '00',
    layout: 'a',
    kicker: 'ก.ค. – ก.ย. 2026',
    title: 'นำเสนอ\nผลงาน Q3',
    sub: 'Vinai Developer',
    name: 'Sutthiphong Raiphon',
  },
  {
    id: 'challenge',
    no: '01',
    layout: 'a',
    kicker: 'Legal Assessment · Inspection Batch',
    title: 'งานที่\nท้าทายที่สุด',
    columns: [
      {
        heading: 'Legal Assessment',
        subheading: 'ประเมินกฎหมาย',
        items: [
          'เหลือเวลาทำจริง 10 วันก่อนลูกค้าใช้',
          'ทั้งโมดูล: My Task, My Approval, Recheck, Legal Master, ปฏิทิน',
          'ทำ Flutter + Go API พร้อมกัน ต่อ NCR และ workflow เดิม',
          'ใช้ component กลางของทีม แก้เคสที่ลูกค้าเจอจริงก่อน',
        ],
        result: 'ส่งทันกำหนด · ขึ้น production ให้ลูกค้าทดลองใช้แล้ว',
      },
      {
        heading: 'Inspection Batch',
        subheading: 'การตรวจแบบกะ',
        items: [
          'เข้าไปรับ requirement จากลูกค้าจริงครั้งแรก ร่วมกับพี่ ๆ',
          'บันทึกผลตรวจแยกตามกะ คำนวณน้ำหนักให้อัตโนมัติ ออกรายงาน Excel/PDF ได้',
          'ผู้ใช้ออกแบบฟอร์มตรวจเองได้ ด้วยการลากวาง',
        ],
        result: 'ระบบตอบโจทย์ลูกค้า · TNT เลือกทำงานกับทีมเราต่อ',
      },
    ],
  },
  {
    id: 'time',
    no: '02',
    layout: 'a',
    kicker: 'งานที่เสียเวลามากที่สุด',
    title: 'Merge &\nConflict',
    sub: '(การรวมโค้ด)',
    columns: [
      {
        heading: 'เกิดอะไรขึ้น',
        items: [
          'ปัญหาเล็ก แต่เกิดบ่อย สะสมเป็นเวลา',
          'รวมโค้ดของหลายคนเข้าด้วยกัน (~282 ครั้งใน Q3)',
          'โค้ดบางส่วนหายหลังรวม ต้องกู้คืนและเทสซ้ำ',
          'การแก้ฐานข้อมูลของแต่ละคนชนกัน · ข้อความ 4 ภาษาไม่ตรงกัน',
          'หลายคนปรับหน้าจอพร้อมกัน โค้ดชนกัน ต้องปรับเข้าหากัน',
        ],
      },
      {
        heading: 'ให้เกิดน้อยลง ด้วยการ',
        items: [
          'ตกลงแนวทางกับทีมก่อนปรับโค้ดหลายไฟล์',
          'แบ่งงานชิ้นเล็ก รวมเข้าโค้ดหลักให้เร็วขึ้น',
          'สร้างเครื่องมือให้ AI agent ช่วยตรวจว่าโค้ดครบหลังรวม',
          'เครื่องมือรวมข้อความ 4 ภาษาให้อัตโนมัติ',
          'กำหนดลำดับการแก้ฐานข้อมูลล่วงหน้า ไม่ให้ชนกัน',
        ],
      },
    ],
  },
  {
    id: 'growth',
    no: '03',
    layout: 'a',
    kicker: 'เก่งขึ้นไหม',
    title: 'พัฒนาขึ้น',
    stat: { value: 'ครึ่งวัน → 1 ชม.', label: 'เวลาทำฟีเจอร์ที่เคยต้องรอทีมหลังบ้าน' },
    columns: [
      {
        heading: 'Full-stack',
        subheading: 'ทำได้ทั้งหน้าบ้านและหลังบ้าน',
        items: [
          'ฟีเจอร์ที่เคยต้องรอทีมหลังบ้าน ตอนนี้ทำเองได้',
          'ทำได้ทั้งหน้าจอแอปและระบบหลังบ้านเป็นงานปกติ',
        ],
      },
      {
        heading: 'ที่เห็นเพิ่ม',
        items: [
          'ส่งมอบ 4 โมดูล: Inspection, Risk, Management Review, Legal',
          'บันทึกอัตโนมัติของ Training: รอบแรกทำให้ระบบช้า ปรับปรุงจนใช้งานลื่นแล้ว',
          'ทำชิ้นส่วนหน้าจอกลางให้ทีมใช้ร่วมกัน',
          'เข้ารับ requirement จากลูกค้าครั้งแรก ร่วมกับพี่ ๆ',
        ],
      },
    ],
  },
  {
    id: 'q4',
    no: '04',
    layout: 'a',
    kicker: 'ต.ค. – ธ.ค. 2026',
    title: 'เป้าหมาย\nQ4',
    columns: [
      {
        heading: 'เป้าหมาย',
        items: [
          'น้องวิ (แชท AI) ใช้งานได้จริง',
          'ปรับปรุงระบบ เตรียมพร้อม pentest',
          'ฟีเจอร์ใช้ภายในตอบโจทย์ทีมในบริษัท',
        ],
      },
      {
        heading: 'ฟีเจอร์ใช้ภายใน',
        items: [
          'Change Control (ควบคุมการเปลี่ยนแปลง)',
          'Risk Management (บริหารความเสี่ยง)',
          'Document Control (ควบคุมเอกสาร)',
          'Training Management (การอบรม)',
          'Internal Audit (การตรวจสอบภายใน)',
        ],
      },
    ],
  },
];

Vue.createApp({
  data() {
    const n = parseInt(location.hash.slice(1), 10);
    return { slides, index: n >= 1 && n <= slides.length ? n - 1 : 0, dir: 'next' };
  },
  computed: {
    current() { return this.slides[this.index]; },
  },
  methods: {
    go(i) {
      if (i < 0 || i >= this.slides.length || i === this.index) return;
      this.dir = i > this.index ? 'next' : 'prev';
      this.index = i;
      document.querySelector('.stage')?.scrollTo(0, 0);
      location.hash = '#' + (i + 1);
    },
    next() { this.go(this.index + 1); },
    prev() { this.go(this.index - 1); },
    onHash() {
      const n = parseInt(location.hash.slice(1), 10);
      if (n >= 1 && n <= this.slides.length) this.go(n - 1);
    },
    isCompact() { return window.matchMedia('(max-width: 800px), (max-height: 520px)').matches; },
    onTouchStart(e) { const t = e.changedTouches[0]; this.touch = { x: t.clientX, y: t.clientY }; },
    onTouchEnd(e) {
      if (!this.touch) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - this.touch.x, dy = t.clientY - this.touch.y;
      this.touch = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) dx < 0 ? this.next() : this.prev();
    },
    onClick(e) {
      if (this.isCompact()) return;
      if (e.target.closest('.nav, .topbar')) return;
      this.next();
    },
    onKey(e) {
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); this.next(); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); this.prev(); }
      else if (e.key === 'Home') this.go(0);
      else if (e.key === 'End') this.go(this.slides.length - 1);
      else if (e.key === 'f') document.documentElement.requestFullscreen?.();
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('hashchange', this.onHash);
  },
  unmounted() {
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('hashchange', this.onHash);
  },
}).mount('#app');
