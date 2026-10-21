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
        items: [
          'ลูกค้ารอใช้สัปดาห์ถัดไป',
          'เวลาทำจริง 10 วัน',
          'ทั้ง Flutter + Go API',
          'เชื่อม NCR / workflow เดิม',
          'วาง contract API ก่อน',
        ],
      },
      {
        heading: 'Inspection Batch',
        items: [
          'รับ requirement จากลูกค้าโดยตรง',
          'ลูกค้าใช้จริงครั้งแรก ๆ ของ Vinai',
          'กดดัน แต่สนุก',
          'หวังลูกค้าพึงพอใจ',
        ],
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
          'รวมโค้ดทำให้ล่าช้า',
          'dev หลายคน โค้ดตกหล่น',
          'เทสเตอร์ต้องเทสซ้ำ',
          'Refactor แล้วต้อง revert',
        ],
      },
      {
        heading: 'จะไม่ให้เกิดซ้ำ',
        items: [
          'ตกลง spec ก่อน refactor',
          'merge เข้า develop ถี่ขึ้น',
          'integrity check หลัง merge',
          'merge driver ของ lang json',
          'จองเลข migration ก่อนเริ่ม',
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
    columns: [
      {
        heading: 'full-stack ได้ดีขึ้น',
        items: [
          'ทำฟีเจอร์หลักหลายอัน',
          'กลับไปแก้สิ่งที่เคยทำไม่ได้',
          'รอ backend ครึ่งวัน → ทำเอง ไม่เกิน 1 ชั่วโมง',
        ],
      },
      {
        heading: 'ผลต่อทีม',
        items: [
          'งานคล่องตัวขึ้น',
          'พี่ ๆ วางใจ',
          'ช่วยงานฝั่งลูกค้าได้มากขึ้น',
          'ส่งมอบ 4 โมดูลใหญ่',
        ],
      },
    ],
    note: 'ต่อเนื่อง Q4 — แชท AI น้องวิ + MCP',
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
      location.hash = '#' + (i + 1);
    },
    next() { this.go(this.index + 1); },
    prev() { this.go(this.index - 1); },
    onClick(e) {
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
  },
  unmounted() { window.removeEventListener('keydown', this.onKey); },
}).mount('#app');
