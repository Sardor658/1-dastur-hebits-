/**
 * EXECUTIVE HABIT TRACKER PRO v3.5
 * 100% Complete Dual-Language Engine (Uzbek & English)
 * Every dot, header, modal, label, and default habit name fully localized.
 */

(function () {
  'use strict';

  // --- COMPREHENSIVE DICTIONARY (UZ / EN) ---
  const I18N = {
    uz: {
      brandTitle: 'ODATLAR NAZORATI',
      pageTitle: 'ODATLAR NAZORATI PRO - Habit Tracker',
      subtitle: 'Oylik odatlar va maqsadlar nazorat paneli',
      langBtn: "O'ZB",
      today: 'Bugun',
      addHabit: 'Yangi Odat',
      demo: 'Demo',
      export: 'Eksport',
      excelExport: '📊 Excel (CSV) ga yuklash',
      jsonBackup: '💾 JSON Zaxira (Backup)',
      jsonRestore: '📥 JSON Fayldan tiklash',
      autoSettingsMenu: '⚡ Avtomatik Eslatma & Zaxiralar',
      clearAllMenu: '🧹 Barcha belgilarni tozalash',
      autoSettingsTitle: '⚡ Avtomatlashtirish & Smart Tizim',
      autoPushTitle: '🔔 Avtomatik Brauzer Eslatmalari (Push Notifications)',
      autoPushDesc: 'Belgilangan vaqtda brauzer fonda bo\'lsa ham eslatma yuboradi.',
      morningTimeLabel: 'Ertalabki eslatma vaqti:',
      eveningTimeLabel: 'Kechki tekshiruv vaqti:',
      testNotificationBtn: '🔔 Hozir sinab ko\'rish (Test Notification)',
      streakShieldTitle: '🛡️ Streak Himoyasi (Streak Freeze)',
      streakShieldDesc: 'Agar bir kun kutilmaganda odat qolib ketsa, streak nollanmaydi.',
      streakShieldActive: '🛡️ 1 ta himoya faol',
      forecastTitle: '📈 Aqlli Prognoz & Tahlil (AI Forecast)',
      forecastDesc: 'Joriy sur\'atingiz asosida oylik natija bashorati.',
      statMonthEnd: 'Oy oxiri kutilmasi',
      statBestDay: 'Eng intizomli kuningiz',
      statGrade: 'Intizom bahosi',
      backupTitle: '💾 Avtomatik Zaxira Tarixi (Auto-Snapshots)',
      backupDesc: 'Har bir o\'zgarish xotirada avtomatik saqlanib boriladi.',
      restoreSnapshotBtn: '↺ Oxirgi zaxirani tiklash',
      dailyProgress: 'Kunlik Progress',
      weeklyProgress: 'Haftalik Progress',
      daysUnit: 'kun',
      weeksUnit: 'hafta',
      goal: 'Maqsad',
      completed: 'Bajarildi',
      left: 'Qoldi',
      completedBadge: 'Bajarildi',
      analysis: 'Tahlil',
      actual: 'Haqiqiy',
      progress: 'Progress',
      habitsHeader: 'ODATLAR',
      habitNameHeader: 'ODAT NOMI',
      totalCompleted: 'Jami Bajarildi',
      dailySuccessRate: 'Muvaffaqiyat %',
      monthNav: 'OYLAR NAVIGATSIYASI',
      monthHint: 'Har bir oyni alohida kuzatish uchun bosing',
      top10: 'ENG YAXSHI 10 TA ODAT',
      top10Badge: '10 ta odat',
      weekPrefix: '',
      weekSuffix: '-HAFTA',
      weekLowerPrefix: '',
      weekLowerSuffix: '-hafta',
      streakUnit: 'kun',
      todayHeading: 'Bugungi Natija',
      bajarildiText: 'bajarildi',
      checkAllTodayBtn: '⚡ Bugungi barcha odatlarni belgilash',
      catchupYesterdayBtn: '↩ Kechagi kun',
      searchPlaceholder: '🔍 Odat nomini qidirish...',
      categoryAll: 'Barchasi',
      categories: [
        { id: 'all', label: 'Barchasi' },
        { id: '📚', label: '📚 Ta\'lim' },
        { id: '💻', label: '💻 Ish / Kod' },
        { id: '💪', label: '💪 Sport' },
        { id: '💧', label: '💧 Salomatlik' },
        { id: '🧘', label: '🧘 Ruh / Intizom' }
      ],
      months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
      weekdays: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
      weekdaysLong: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
      levelTitle: 'Daraja',
      levelNames: {
        1: 'Boshlovchi',
        2: 'Intizomli',
        3: 'Tajribali',
        4: 'Master',
        5: 'Titan'
      },
      addHabitModalTitle: 'Yangi Odat Qo\'shish',
      editHabitModalTitle: 'Odatni Tahrirlash',
      habitNameLabel: 'Odat Nomi',
      habitNamePlaceholder: 'Masalan: Kitob o\'qish / 30 daqiqa',
      habitGoalLabel: 'Oylik Maqsad (kun)',
      habitCategoryLabel: 'Kategoriya / Icon',
      modalCancel: 'Bekor qilish',
      modalSave: 'Saqlash',
      badgesModalHeading: '🏆 Yutuqlar va Medallar (Achievements)',
      badgesTotalXp: 'Jami XP',
      badgesNextLevel: 'Keyingi darajaga',
      badgesLeft: 'XP qoldi',
      badgeUnlocked: '✨ OCHILDI',
      badgeLocked: '🔒 Qulflangan',
      shortcutsModalHeading: '⌨️ Tezkor Klaviatura Tugmalari',
      shortcuts: [
        { key: 'T', desc: 'Bugungi kunga o\'tish' },
        { key: 'A', desc: 'Yangi odat qo\'shish' },
        { key: 'D', desc: 'Namunaviy ko\'rsatkichlarni ko\'rish' },
        { key: 'M', desc: 'Ovozni yoqish / o\'chirish' },
        { key: 'P', desc: 'Chop etish / PDF ga saqlash' },
        { key: '?', desc: 'Ushbu yordam oynasi' },
        { key: 'Shift + Click', desc: 'Katakchaga izoh / eslatma yozish' }
      ],
      noteModalHeading: '📝 Kunga izoh qo\'shish',
      noteModalSubtitle: 'Ushbu kunga qisqa izoh yoki eslatma yozing:',
      notePlaceholder: 'Masalan: 40 bet o\'qidim, ajoyib fikrlar oldim...',
      noteDelete: 'O\'chirish',
      noteSave: 'Saqlash',
      noHabitsText: 'Hech qanday odat topilmadi',
      quotes: [
        'Kichik kundalik odatlar buyuk natijalarga olib keladi.',
        'Intizom — bu orzular va maqsadlar orasidagi mustahkam ko\'prikdir.',
        'Bugun qilgan 1% yaxshilanish yil oxirida 37 barobar o\'sish beradi.',
        'Muvaffaqiyat — bu bir kunlik natija emas, balki har kungi odat.',
        'O\'zingizga bergan va\'dani bajarish — eng buyuk g\'alabadir.'
      ],
      toasts: {
        saved: 'Odat muvaffaqiyatli saqlandi!',
        deleted: 'Odat o\'chirildi.',
        demo: 'Namunaviy ma\'lumotlar yuklandi!',
        csv: 'Excel fayl (CSV) yuklab olindi!',
        jsonExport: 'JSON zaxira fayli yuklab olindi!',
        jsonImportSuccess: 'Ma\'lumotlar muvaffaqiyatli tiklandi!',
        jsonImportError: 'Faylni o\'qishda xatolik yuz berdi.',
        cleared: 'Barcha belgilar tozalandi! O\'zingiz belgilashni boshlang.',
        soundOn: 'Ovoz yoqildi',
        soundOff: 'Ovoz o\'chirildi',
        noteSaved: 'Izoh saqlandi!',
        noteDeleted: 'Izoh o\'chirildi.',
        newDay: 'Yangi kun boshlandi! Omadli kun tilaymiz! 🌅',
        allDoneToday: 'Bugungi barcha odatlar bajarildi deb belgilandi! ⚡',
        yesterdayFilled: 'Kechagi kungi odatlar to\'ldirildi! ↩',
        yesterdayCleared: 'Kechagi kungi belgilar tozalandi.',
        testNotificationSent: 'Sinov bildirishnomasi yuborildi!'
      },
      confirmDelete: 'Ushbu odatni o\'chirishni xohlaysizmi?',
      confirmClear: 'Ushbu oydagi barcha belgilarni tozalab, noldan boshlashni tasdiqlaysizmi?',
      confirmDemo: 'Namunaviy ma\'lumotlarni ko\'rishni xohlaysizmi?'
    },
    en: {
      brandTitle: 'HABIT TRACKER',
      pageTitle: 'HABIT TRACKER PRO - Executive Monthly Tracker',
      subtitle: 'Executive Monthly Habit & Performance Dashboard',
      langBtn: 'ENG',
      today: 'Today',
      addHabit: 'Add Habit',
      demo: 'Demo',
      export: 'Export',
      excelExport: '📊 Export to Excel (CSV)',
      jsonBackup: '💾 JSON Backup',
      jsonRestore: '📥 Restore from JSON',
      autoSettingsMenu: '⚡ Auto-Reminders & Snapshots',
      clearAllMenu: '🧹 Clear All Checkmarks',
      autoSettingsTitle: '⚡ Automation & Smart Engine',
      autoPushTitle: '🔔 Automatic Browser Notifications (Push)',
      autoPushDesc: 'Sends desktop alerts even when the browser is in the background.',
      morningTimeLabel: 'Morning reminder time:',
      eveningTimeLabel: 'Evening review time:',
      testNotificationBtn: '🔔 Send Test Notification',
      streakShieldTitle: '🛡️ Streak Protection (Streak Freeze)',
      streakShieldDesc: 'Preserves your streak if a day is accidentally missed.',
      streakShieldActive: '🛡️ 1 Shield active',
      forecastTitle: '📈 Smart Trajectory Forecast (AI Forecast)',
      forecastDesc: 'Projected month-end completion based on your current pace.',
      statMonthEnd: 'Month-End Forecast',
      statBestDay: 'Most Consistent Day',
      statGrade: 'Discipline Grade',
      backupTitle: '💾 Automated Snapshot History',
      backupDesc: 'Every change is timestamped and automatically backed up.',
      restoreSnapshotBtn: '↺ Restore Latest Snapshot',
      dailyProgress: 'Daily Progress',
      weeklyProgress: 'Weekly Progress',
      daysUnit: 'days',
      weeksUnit: 'weeks',
      goal: 'Goal',
      completed: 'Completed',
      left: 'Left',
      completedBadge: 'Completed',
      analysis: 'Analysis',
      actual: 'Actual',
      progress: 'Progress',
      habitsHeader: 'HABITS',
      habitNameHeader: 'HABIT NAME',
      totalCompleted: 'Total Completed',
      dailySuccessRate: 'Success Rate %',
      monthNav: 'MONTH NAVIGATION',
      monthHint: 'Click to inspect or record individual months',
      top10: 'TOP 10 HABITS',
      top10Badge: '10 habits',
      weekPrefix: 'WEEK ',
      weekSuffix: '',
      weekLowerPrefix: 'week ',
      weekLowerSuffix: '',
      streakUnit: 'days',
      todayHeading: 'Today\'s Progress',
      bajarildiText: 'completed',
      checkAllTodayBtn: '⚡ Mark all habits for today',
      catchupYesterdayBtn: '↩ Yesterday',
      searchPlaceholder: '🔍 Search habit name...',
      categoryAll: 'All',
      categories: [
        { id: 'all', label: 'All' },
        { id: '📚', label: '📚 Education' },
        { id: '💻', label: '💻 Work / Code' },
        { id: '💪', label: '💪 Fitness' },
        { id: '💧', label: '💧 Health' },
        { id: '🧘', label: '🧘 Mind / Soul' }
      ],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      weekdaysLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      levelTitle: 'Level',
      levelNames: {
        1: 'Beginner',
        2: 'Disciplined',
        3: 'Experienced',
        4: 'Master',
        5: 'Titan'
      },
      addHabitModalTitle: 'Add New Habit',
      editHabitModalTitle: 'Edit Habit',
      habitNameLabel: 'Habit Name',
      habitNamePlaceholder: 'e.g. Reading / 30 minutes',
      habitGoalLabel: 'Monthly Goal (days)',
      habitCategoryLabel: 'Category / Icon',
      modalCancel: 'Cancel',
      modalSave: 'Save',
      badgesModalHeading: '🏆 Achievements & Badges',
      badgesTotalXp: 'Total XP',
      badgesNextLevel: 'Next level in',
      badgesLeft: 'XP remaining',
      badgeUnlocked: '✨ UNLOCKED',
      badgeLocked: '🔒 Locked',
      shortcutsModalHeading: '⌨️ Keyboard Shortcuts',
      shortcuts: [
        { key: 'T', desc: 'Jump to today' },
        { key: 'A', desc: 'Add new habit' },
        { key: 'D', desc: 'View demo reference values' },
        { key: 'M', desc: 'Toggle sound on/off' },
        { key: 'P', desc: 'Print / Save as PDF' },
        { key: '?', desc: 'This help guide' },
        { key: 'Shift + Click', desc: 'Add note / journal to cell' }
      ],
      noteModalHeading: '📝 Add Daily Note',
      noteModalSubtitle: 'Brief note about this habit and day:',
      notePlaceholder: 'e.g. Read 40 pages, great insights...',
      noteDelete: 'Delete',
      noteSave: 'Save',
      noHabitsText: 'No habits found',
      quotes: [
        'Small daily habits compound into remarkable lifelong success.',
        'Discipline is the bridge between goals and accomplishments.',
        '1% better every day yields a 37x transformation over a year.',
        'Success is not an event, it is the result of daily consistency.',
        'Keeping promises to yourself builds unshakable self-confidence.'
      ],
      toasts: {
        saved: 'Habit saved successfully!',
        deleted: 'Habit deleted.',
        demo: 'Demo reference data loaded!',
        csv: 'CSV file exported successfully!',
        jsonExport: 'JSON backup file exported!',
        jsonImportSuccess: 'Data restored successfully!',
        jsonImportError: 'Invalid JSON file format.',
        cleared: 'All checkmarks cleared! Ready for fresh tracking.',
        soundOn: 'Sound turned on',
        soundOff: 'Sound muted',
        noteSaved: 'Note saved!',
        noteDeleted: 'Note deleted.',
        newDay: 'New day started! Have a productive day! 🌅',
        allDoneToday: 'All habits marked for today! ⚡',
        yesterdayFilled: 'Yesterday\'s habits filled! ↩',
        yesterdayCleared: 'Yesterday\'s checkmarks cleared.',
        testNotificationSent: 'Test notification sent!'
      },
      confirmDelete: 'Are you sure you want to delete this habit?',
      confirmClear: 'Clear all checkmarks for this month to start fresh?',
      confirmDemo: 'Load demo reference values?'
    }
  };

  // Default localized habit templates
  const DEFAULT_HABIT_TEMPLATES = [
    { name_uz: 'Kitob o\'qish / Ta\'lim', name_en: 'Reading / Learning', icon: '📚' },
    { name_uz: 'Loyiha ustida ishlash', name_en: 'Project Work', icon: '💻' },
    { name_uz: 'Ertangi kunni rejalashtirish', name_en: 'Plan Tomorrow', icon: '⏰' },
    { name_uz: 'Vaqtli uyg\'onish (6:00)', name_en: 'Wake Up Early (6 AM)', icon: '☀️' },
    { name_uz: 'Sport / Jismoniy mashq', name_en: 'Workout / Exercise', icon: '💪' },
    { name_uz: '2.5L suv ichish', name_en: 'Drink 2.5L Water', icon: '💧' },
    { name_uz: 'Meditatsiya (15 daqiqa)', name_en: 'Meditation (15m)', icon: '🧘' },
    { name_uz: 'Kun sarhisobi va tafakkur', name_en: 'Day Reflection', icon: '📝' },
    { name_uz: '10,000 qadam yurish', name_en: 'Walk 10,000 Steps', icon: '🚶' },
    { name_uz: 'Chuqur fokusli ish (4 soat)', name_en: 'Deep Work (4 Hours)', icon: '🎯' },
    { name_uz: 'To\'g\'ri ovqatlanish', name_en: 'Healthy Nutrition', icon: '🥗' },
    { name_uz: '8 soat to\'liq uyqu', name_en: 'Sleep 8 Hours', icon: '🌙' }
  ];

  // Storage Keys
  const STORAGE_KEY_DATA = 'executive_habits_store_v4';
  const STORAGE_KEY_LANG = 'executive_habits_lang_v4';
  const STORAGE_KEY_SOUND = 'executive_habits_sound_v4';
  const STORAGE_KEY_AUTO = 'executive_habits_auto_cfg_v4';
  const STORAGE_KEY_SNAPSHOTS = 'executive_habits_snapshots_v4';

  // State
  let currentLang = localStorage.getItem(STORAGE_KEY_LANG) || 'uz';
  let soundEnabled = localStorage.getItem(STORAGE_KEY_SOUND) !== 'false';

  let lastCheckedDateDay = new Date().getDate();
  const realNow = new Date();
  let selectedYear = realNow.getFullYear();
  let selectedMonth = realNow.getMonth();

  let activeCategoryFilter = 'all';
  let searchQuery = '';

  let appData = {};

  let autoConfig = {
    notificationsEnabled: false,
    morningTime: '09:00',
    eveningTime: '21:00',
    streakShieldAvailable: true,
    lastNotificationDate: ''
  };

  try {
    const rawAuto = localStorage.getItem(STORAGE_KEY_AUTO);
    if (rawAuto) autoConfig = Object.assign(autoConfig, JSON.parse(rawAuto));
  } catch (e) {}

  function saveAutoConfig() {
    try {
      localStorage.setItem(STORAGE_KEY_AUTO, JSON.stringify(autoConfig));
    } catch (e) {}
  }

  // Audio Context
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playClickSound(checked) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const nowTime = ctx.currentTime;
      if (checked) {
        osc.frequency.setValueAtTime(620, nowTime);
        osc.frequency.exponentialRampToValueAtTime(920, nowTime + 0.05);
        gain.gain.setValueAtTime(0.12, nowTime);
        gain.gain.exponentialRampToValueAtTime(0.001, nowTime + 0.07);
        osc.start(nowTime);
        osc.stop(nowTime + 0.07);
      } else {
        osc.frequency.setValueAtTime(400, nowTime);
        osc.frequency.exponentialRampToValueAtTime(300, nowTime + 0.05);
        gain.gain.setValueAtTime(0.08, nowTime);
        gain.gain.exponentialRampToValueAtTime(0.001, nowTime + 0.06);
        osc.start(nowTime);
        osc.stop(nowTime + 0.06);
      }
    } catch (e) {}
  }

  function playCelebrationChord() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        const startTime = ctx.currentTime + idx * 0.06;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  }

  // --- CONFETTI FIREWORKS ---
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.35,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.8) * 14,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        life: 1
      });
    }

    let animId;
    function renderParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rotationSpeed;
        p.life -= 0.015;
        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      if (alive) {
        animId = requestAnimationFrame(renderParticles);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animId);
      }
    }
    renderParticles();
  }

  // Helper: get display name for habit
  function getHabitDisplayName(h) {
    if (currentLang === 'uz') {
      return h.name_uz || h.name;
    } else {
      return h.name_en || h.name;
    }
  }

  // --- DEFAULT HABITS (FRESH / UNCHECKED) ---
  function getDefaultEmptyHabits(daysCount) {
    return DEFAULT_HABIT_TEMPLATES.map((item, index) => ({
      id: 'habit_' + (Date.now() + index),
      name: item.name_uz,
      name_uz: item.name_uz,
      name_en: item.name_en,
      icon: item.icon,
      goal: daysCount,
      checks: {},
      notes: {}
    }));
  }

  // --- DEMO HABITS ---
  function getPhotoDemoHabits(daysInMonth) {
    const counts = [21, 21, 24, 21, 7, 23, 22, 23, 21, 21, 22, 22];

    return DEFAULT_HABIT_TEMPLATES.map((item, index) => {
      const checks = {};
      let remaining = counts[index];

      if (remaining === 7) {
        for (let day = 1; day <= daysInMonth && remaining > 0; day++) {
          if (day <= 22 && day % 3 === 1) {
            checks[day] = true;
            remaining--;
          }
        }
      } else {
        const skips = {
          0: [5, 12, 19],
          1: [4, 11, 18],
          2: [],
          3: [3, 10, 17],
          5: [8],
          6: [6, 13],
          7: [7],
          8: [2, 9],
          9: [1, 14],
          10: [15],
          11: [16]
        }[index] || [];
        for (let day = 1; day <= daysInMonth && remaining > 0; day++) {
          if (day <= 24 && !skips.includes(day)) {
            checks[day] = true;
            remaining--;
          }
        }
      }

      for (let day = 1; day <= daysInMonth && remaining > 0; day++) {
        if (!checks[day]) {
          checks[day] = true;
          remaining--;
        }
      }

      return {
        id: 'habit_' + (Date.now() + index),
        name: item.name_uz,
        name_uz: item.name_uz,
        name_en: item.name_en,
        icon: item.icon,
        goal: daysInMonth,
        checks: checks,
        notes: {}
      };
    });
  }

  // --- AUTOMATED SNAPSHOTS ---
  function recordAutoSnapshot() {
    try {
      let snapshots = [];
      const raw = localStorage.getItem(STORAGE_KEY_SNAPSHOTS);
      if (raw) snapshots = JSON.parse(raw);
      if (!Array.isArray(snapshots)) snapshots = [];

      snapshots.unshift({
        timestamp: Date.now(),
        dateStr: new Date().toLocaleString(),
        data: JSON.parse(JSON.stringify(appData))
      });

      if (snapshots.length > 8) snapshots = snapshots.slice(0, 8);
      localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(snapshots));
    } catch (e) {}
  }

  function restoreLatestSnapshot() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_SNAPSHOTS);
      if (!raw) {
        showToast(currentLang === 'uz' ? 'Hali zaxira nusxasi mavjud emas.' : 'No backup snapshots found.');
        return;
      }
      const snapshots = JSON.parse(raw);
      if (!Array.isArray(snapshots) || snapshots.length === 0) {
        showToast(currentLang === 'uz' ? 'Zaxira topilmadi.' : 'No backup found.');
        return;
      }
      const latest = snapshots[0];
      if (latest && latest.data) {
        appData = latest.data;
        saveData();
        renderAll();
        showToast((currentLang === 'uz' ? 'Zaxira tiklandi: ' : 'Restored backup: ') + latest.dateStr);
      }
    } catch (e) {
      showToast(currentLang === 'uz' ? 'Xatolik yuz berdi.' : 'Error restoring backup.');
    }
  }

  // --- STORAGE HELPERS ---
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_DATA);
      if (raw) {
        appData = JSON.parse(raw);
      } else {
        appData = {};
      }
    } catch (e) {
      appData = {};
    }
    ensureMonthData(selectedYear, selectedMonth);
  }

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(appData));
      recordAutoSnapshot();
    } catch (e) {
      console.error(e);
    }
  }

  function ensureMonthData(year, month) {
    if (!appData[year]) {
      appData[year] = {};
    }
    if (!appData[year][month] || !Array.isArray(appData[year][month]) || appData[year][month].length === 0) {
      const daysCount = getDaysInMonth(year, month);
      appData[year][month] = getDefaultEmptyHabits(daysCount);
      saveData();
    }
  }

  function getCurrentHabits() {
    ensureMonthData(selectedYear, selectedMonth);
    return appData[selectedYear][selectedMonth];
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getWeekGroups(year, month) {
    const daysCount = getDaysInMonth(year, month);
    const groups = [];
    let currentWeek = 1;
    let currentDays = [];
    const t = I18N[currentLang];

    for (let day = 1; day <= daysCount; day++) {
      currentDays.push(day);
      const date = new Date(year, month, day);
      if (date.getDay() === 6 || day === daysCount) {
        groups.push({
          name: `${t.weekPrefix}${currentWeek}${t.weekSuffix}`,
          lowerName: `${t.weekLowerPrefix}${currentWeek}${t.weekLowerSuffix}`,
          days: [...currentDays]
        });
        currentDays = [];
        currentWeek++;
      }
    }
    return groups;
  }

  function getHabitStreak(habit, daysCount) {
    let streak = 0;
    let usedShield = false;

    for (let d = daysCount; d >= 1; d--) {
      if (habit.checks && habit.checks[d]) {
        streak++;
      } else {
        if (streak > 0 && !usedShield && autoConfig.streakShieldAvailable) {
          usedShield = true;
        } else if (streak > 0) {
          break;
        }
      }
    }
    return streak;
  }

  // --- AUTOMATION WORKER ---
  function initAutomationWorker() {
    setInterval(() => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const clockEl = document.getElementById('liveClockDisplay');
      if (clockEl) clockEl.textContent = `${hh}:${mm}`;

      const currentDay = d.getDate();
      if (currentDay !== lastCheckedDateDay) {
        lastCheckedDateDay = currentDay;
        jumpToToday();
        showToast(I18N[currentLang].toasts.newDay);
      }
    }, 1000);

    setInterval(() => {
      if (!autoConfig.notificationsEnabled) return;
      if (!('Notification' in window) || Notification.permission !== 'granted') return;

      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const currentTimeStr = `${hh}:${mm}`;
      const todayKey = `${d.getFullYear()}_${d.getMonth()}_${d.getDate()}_${currentTimeStr}`;

      if (autoConfig.lastNotificationDate === todayKey) return;

      if (currentTimeStr === autoConfig.morningTime) {
        autoConfig.lastNotificationDate = todayKey;
        saveAutoConfig();
        new Notification(currentLang === 'uz' ? '🌅 Xayrli tong! (Odatlar Nazorati)' : '🌅 Good Morning! (Habit Tracker)', {
          body: currentLang === 'uz' ? 'Bugungi maqsadlaringizni bajarish vaqti keldi!' : 'Time to tackle your daily habits today!',
          icon: 'favicon.ico'
        });
      } else if (currentTimeStr === autoConfig.eveningTime) {
        autoConfig.lastNotificationDate = todayKey;
        saveAutoConfig();
        const habits = getCurrentHabits();
        const done = habits.filter(h => h.checks && h.checks[d.getDate()]).length;
        new Notification(currentLang === 'uz' ? '🌙 Xayrli oqshom! (Odatlar Nazorati)' : '🌙 Good Evening! (Habit Tracker)', {
          body: currentLang === 'uz' ? `Bugun ${done}/${habits.length} odat bajarildi. Kunni to'liq yakunlang!` : `Completed ${done}/${habits.length} habits today. Finish strong!`,
          icon: 'favicon.ico'
        });
      }
    }, 60000);
  }

  function requestNotificationAccess() {
    if (!('Notification' in window)) {
      showToast(currentLang === 'uz' ? 'Brauzeringiz Notification API ni qo\'llab-quvvatlamaydi.' : 'Browser does not support notifications.');
      return;
    }
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        autoConfig.notificationsEnabled = true;
        saveAutoConfig();
        document.getElementById('autoNotificationToggle').checked = true;
        showToast(currentLang === 'uz' ? 'Avtomatik bildirishnomalar yoqildi! 🔔' : 'Notifications enabled! 🔔');
        new Notification(I18N[currentLang].brandTitle, {
          body: currentLang === 'uz' ? 'Bildirishnomalar muvaffaqiyatli yoqildi!' : 'Notifications activated successfully!',
          icon: 'favicon.ico'
        });
      } else {
        autoConfig.notificationsEnabled = false;
        saveAutoConfig();
        document.getElementById('autoNotificationToggle').checked = false;
        showToast(currentLang === 'uz' ? 'Bildirishnomalar rad etildi.' : 'Notifications disabled.');
      }
    });
  }

  // Forecast computation
  function computeForecast() {
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const today = new Date();
    const activeDay = (today.getFullYear() === selectedYear && today.getMonth() === selectedMonth) ? today.getDate() : daysCount;

    let totalCompletedSoFar = 0;
    const weekdayCounts = [0, 0, 0, 0, 0, 0, 0];
    const weekdayTotals = [0, 0, 0, 0, 0, 0, 0];

    for (let d = 1; d <= activeDay; d++) {
      const wd = new Date(selectedYear, selectedMonth, d).getDay();
      habits.forEach(h => {
        weekdayTotals[wd]++;
        if (h.checks && h.checks[d]) {
          totalCompletedSoFar++;
          weekdayCounts[wd]++;
        }
      });
    }

    const totalPossibleSoFar = habits.length * activeDay;
    const currentRate = totalPossibleSoFar > 0 ? (totalCompletedSoFar / totalPossibleSoFar) * 100 : 0;
    const projectedMonthEndPct = Math.min(100, Math.round(currentRate));

    let bestDayIdx = 1;
    let bestDayPct = -1;
    for (let i = 0; i < 7; i++) {
      if (weekdayTotals[i] > 0) {
        const rate = weekdayCounts[i] / weekdayTotals[i];
        if (rate > bestDayPct) {
          bestDayPct = rate;
          bestDayIdx = i;
        }
      }
    }
    const bestDayName = I18N[currentLang].weekdaysLong[bestDayIdx];

    let grade = 'B';
    if (currentRate >= 90) grade = 'A+ 🏆';
    else if (currentRate >= 75) grade = 'A ✨';
    else if (currentRate >= 50) grade = 'B 👍';
    else grade = 'C 💪';

    return {
      forecastPct: projectedMonthEndPct,
      bestDay: bestDayName,
      grade: grade
    };
  }

  // Gamification computation
  function computeGamification() {
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);

    let totalChecks = 0;
    let maxStreak = 0;
    let habitsWithAnyCheck = 0;
    let daysWith100Pct = 0;

    for (let d = 1; d <= daysCount; d++) {
      let dayCompleted = 0;
      habits.forEach(h => {
        if (h.checks && h.checks[d]) dayCompleted++;
      });
      if (habits.length > 0 && dayCompleted === habits.length) {
        daysWith100Pct++;
      }
    }

    habits.forEach(h => {
      let count = 0;
      for (let d = 1; d <= daysCount; d++) {
        if (h.checks && h.checks[d]) count++;
      }
      if (count > 0) habitsWithAnyCheck++;
      totalChecks += count;
      const s = getHabitStreak(h, daysCount);
      if (s > maxStreak) maxStreak = s;
    });

    const totalGoal = habits.reduce((acc, h) => acc + (h.goal || daysCount), 0);
    const overallPct = totalGoal > 0 ? (totalChecks / totalGoal) * 100 : 0;

    const badges = [
      {
        id: 'first_step',
        icon: '🎯',
        title: currentLang === 'uz' ? 'Birinchi Qadam' : 'First Step',
        desc: currentLang === 'uz' ? 'Kamida 1 ta odatni bajardingiz' : 'Completed at least 1 habit',
        xp: 50,
        unlocked: totalChecks >= 1
      },
      {
        id: 'perfect_day',
        icon: '⚡',
        title: currentLang === 'uz' ? 'Mukammal Kun' : 'Perfect Day',
        desc: currentLang === 'uz' ? '1 kunda barcha odatlar 100% bajarildi' : '100% of all habits completed in a day',
        xp: 100,
        unlocked: daysWith100Pct >= 1
      },
      {
        id: 'streak_3',
        icon: '🔥',
        title: currentLang === 'uz' ? '3 Kunlik Olov' : '3-Day Flame',
        desc: currentLang === 'uz' ? '3 kun uzluksiz davomiy streak' : '3-day unbroken streak',
        xp: 150,
        unlocked: maxStreak >= 3
      },
      {
        id: 'streak_7',
        icon: '🚀',
        title: currentLang === 'uz' ? 'Hafta Qahramoni' : 'Week Champion',
        desc: currentLang === 'uz' ? '7 kun ketma-ket biror odat bajarildi' : '7-day unbroken habit streak',
        xp: 300,
        unlocked: maxStreak >= 7
      },
      {
        id: 'versatile',
        icon: '🌟',
        title: currentLang === 'uz' ? 'Ko\'p Qirrali' : 'Versatile',
        desc: currentLang === 'uz' ? 'Kamida 5 ta har xil odat boshlandi' : 'Started at least 5 different habits',
        xp: 150,
        unlocked: habitsWithAnyCheck >= 5
      },
      {
        id: 'champion',
        icon: '💎',
        title: currentLang === 'uz' ? 'Oylik Chempion' : 'Monthly Champion',
        desc: currentLang === 'uz' ? 'Oylik umumiy progress 80% dan oshdi' : 'Monthly completion exceeded 80%',
        xp: 500,
        unlocked: overallPct >= 80
      }
    ];

    let xp = totalChecks * 10;
    badges.forEach(b => {
      if (b.unlocked) xp += b.xp;
    });

    let level = 1;
    let nextXp = 100;
    let prevXp = 0;

    if (xp >= 1000) {
      level = 5; prevXp = 1000; nextXp = 2000;
    } else if (xp >= 600) {
      level = 4; prevXp = 600; nextXp = 1000;
    } else if (xp >= 300) {
      level = 3; prevXp = 300; nextXp = 600;
    } else if (xp >= 100) {
      level = 2; prevXp = 100; nextXp = 300;
    }

    const levelTitle = I18N[currentLang].levelNames[level];
    const levelPct = Math.min(100, Math.round(((xp - prevXp) / (nextXp - prevXp)) * 100));

    return {
      xp: xp,
      level: level,
      levelTitle: levelTitle,
      levelPct: levelPct,
      nextXpRemaining: Math.max(0, nextXp - xp),
      badges: badges
    };
  }

  // --- RENDER ALL ---
  function renderAll() {
    updateLanguageTexts();
    renderMonthPicker();
    renderTodayFocusBar();
    renderCategoryTabs();
    renderMatrixTable();
    renderDailyProgressChart();
    renderWeeklyProgressChart();
    renderMetricsAndDonut();
    renderMonthTabs();
    renderTop10Habits();
    renderGamificationHeader();
    renderForecastModalData();
  }

  // Update ALL text across the entire DOM in real-time
  function updateLanguageTexts() {
    const t = I18N[currentLang];

    document.getElementById('pageTitle').textContent = t.pageTitle;
    document.getElementById('txtBrandTitle').textContent = t.brandTitle;
    document.getElementById('headerSubtitle').textContent = t.subtitle;
    document.getElementById('txtAddHabit').textContent = t.addHabit;
    document.getElementById('txtDemo').textContent = t.demo;
    document.getElementById('txtExport').textContent = t.export;
    document.getElementById('todayJumpBtn').textContent = t.today;

    // Export dropdown
    document.getElementById('exportCsvBtn').textContent = t.excelExport;
    document.getElementById('exportJsonBtn').textContent = t.jsonBackup;
    document.getElementById('importJsonTrigger').textContent = t.jsonRestore;
    document.getElementById('openAutoModalFromMenu').textContent = t.autoSettingsMenu;
    document.getElementById('clearChecksBtn').textContent = t.clearAllMenu;

    // Today bar buttons
    document.getElementById('txtCheckAllToday').textContent = t.checkAllTodayBtn;
    document.getElementById('txtCatchupYesterday').textContent = t.catchupYesterdayBtn;
    document.getElementById('habitSearchInput').placeholder = t.searchPlaceholder;

    // Analytics headers & cards
    document.getElementById('txtDailyProgress').textContent = t.dailyProgress;
    document.getElementById('txtWeeklyProgress').textContent = t.weeklyProgress;
    document.getElementById('txtGoalLabel').textContent = t.goal;
    document.getElementById('txtCompletedLabel').textContent = t.completed;
    document.getElementById('txtLeftLabel').textContent = t.left;
    document.getElementById('txtBajarildi').textContent = t.completedBadge;

    // Bottom section
    document.getElementById('txtMonthNavigation').textContent = t.monthNav;
    document.getElementById('txtMonthHint').textContent = t.monthHint;
    document.getElementById('txtTop10Title').textContent = t.top10;
    document.getElementById('topHabitsBadge').textContent = t.top10Badge;

    // Automation Modal
    document.getElementById('autoModalHeading').textContent = t.autoSettingsTitle;
    document.getElementById('txtAutoPushTitle').textContent = t.autoPushTitle;
    document.getElementById('txtAutoPushDesc').textContent = t.autoPushDesc;
    document.getElementById('lblMorningTime').textContent = t.morningTimeLabel;
    document.getElementById('lblEveningTime').textContent = t.eveningTimeLabel;
    document.getElementById('txtTestNotification').textContent = t.testNotificationBtn;
    document.getElementById('txtShieldTitle').textContent = t.streakShieldTitle;
    document.getElementById('txtShieldDesc').textContent = t.streakShieldDesc;
    document.getElementById('streakShieldStatus').textContent = t.streakShieldActive;
    document.getElementById('txtForecastTitle').textContent = t.forecastTitle;
    document.getElementById('txtForecastDesc').textContent = t.forecastDesc;
    document.getElementById('lblStatMonthEnd').textContent = t.statMonthEnd;
    document.getElementById('lblStatBestDay').textContent = t.statBestDay;
    document.getElementById('lblStatGrade').textContent = t.statGrade;
    document.getElementById('txtBackupTitle').textContent = t.backupTitle;
    document.getElementById('txtBackupDesc').textContent = t.backupDesc;
    document.getElementById('txtRestoreSnapshot').textContent = t.restoreSnapshotBtn;

    // Add / Edit Modal
    document.getElementById('modalTitle').textContent = t.addHabitModalTitle;
    document.getElementById('lblHabitName').textContent = t.habitNameLabel;
    document.getElementById('habitNameInput').placeholder = t.habitNamePlaceholder;
    document.getElementById('lblHabitGoal').textContent = t.habitGoalLabel;
    document.getElementById('lblHabitCategory').textContent = t.habitCategoryLabel;
    document.getElementById('modalCancelBtn').textContent = t.modalCancel;
    document.getElementById('modalSaveBtn').textContent = t.modalSave;

    // Badges Modal
    document.getElementById('badgesModalHeading').textContent = t.badgesModalHeading;

    // Shortcuts Modal
    document.getElementById('shortcutsModalHeading').textContent = t.shortcutsModalHeading;
    const shortcutsContainer = document.getElementById('shortcutsListContainer');
    if (shortcutsContainer) {
      shortcutsContainer.innerHTML = t.shortcuts.map(s => `
        <div class="shortcut-row"><kbd>${s.key}</kbd> <span>${s.desc}</span></div>
      `).join('');
    }

    // Note Modal
    document.getElementById('noteModalTitle').textContent = t.noteModalHeading;
    document.getElementById('noteModalSubtitle').textContent = t.noteModalSubtitle;
    document.getElementById('cellNoteInput').placeholder = t.notePlaceholder;
    document.getElementById('noteDeleteBtn').textContent = t.noteDelete;
    document.getElementById('noteSaveBtn').textContent = t.noteSave;

    // Language switch button
    document.getElementById('currentLangText').textContent = t.langBtn;
  }

  function renderMonthPicker() {
    const t = I18N[currentLang];
    document.getElementById('currentMonthName').textContent = t.months[selectedMonth];
    document.getElementById('currentYearLabel').textContent = selectedYear;
  }

  function renderTodayFocusBar() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === selectedYear && today.getMonth() === selectedMonth;
    const todayDay = today.getDate();

    const dayName = t.weekdaysLong[today.getDay()];
    document.getElementById('todayDayNameLabel').textContent = dayName;
    document.getElementById('todayDayNumLabel').textContent = todayDay;

    let doneCount = 0;
    if (isCurrentMonth) {
      habits.forEach(h => {
        if (h.checks && h.checks[todayDay]) doneCount++;
      });
    }

    const pct = habits.length > 0 ? Math.round((doneCount / habits.length) * 100) : 0;
    document.getElementById('todayStatusHeading').innerHTML = `${t.todayHeading}: <span id="todayCountDone">${doneCount}</span> / <span id="todayTotalCount">${habits.length}</span> ${t.bajarildiText} (<span id="todayPctDone">${pct}%</span>)`;
    document.getElementById('todayMiniProgressFill').style.width = `${pct}%`;

    const quoteIndex = (today.getDate() + selectedMonth) % t.quotes.length;
    document.getElementById('dailyQuoteText').textContent = t.quotes[quoteIndex];
  }

  function renderCategoryTabs() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const container = document.getElementById('categoryTabsContainer');

    let html = '';
    t.categories.forEach(cat => {
      const isActive = activeCategoryFilter === cat.id ? 'active' : '';
      const count = cat.id === 'all' ? habits.length : habits.filter(h => h.icon === cat.id).length;
      html += `<button class="cat-pill ${isActive}" data-cat="${cat.id}">${cat.label} (${count})</button>`;
    });

    container.innerHTML = html;
  }

  function renderGamificationHeader() {
    const t = I18N[currentLang];
    const g = computeGamification();
    document.getElementById('userLevelBadge').textContent = `👑 ${g.level}-${t.levelTitle}: ${g.levelTitle}`;
    document.getElementById('userXp').textContent = g.xp;
    document.getElementById('levelProgressFill').style.width = `${g.levelPct}%`;
  }

  function renderForecastModalData() {
    const f = computeForecast();
    const pctEl = document.getElementById('forecastMonthEndPct');
    const dayEl = document.getElementById('forecastBestDayName');
    const gradeEl = document.getElementById('forecastGrade');
    if (pctEl) pctEl.textContent = `${f.forecastPct}%`;
    if (dayEl) dayEl.textContent = f.bestDay;
    if (gradeEl) gradeEl.textContent = f.grade;
  }

  function getFilteredHabits() {
    let habits = getCurrentHabits();
    if (activeCategoryFilter !== 'all') {
      habits = habits.filter(h => h.icon === activeCategoryFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      habits = habits.filter(h => getHabitDisplayName(h).toLowerCase().includes(q));
    }
    return habits;
  }

  // 1. Render Habits Matrix Table
  function renderMatrixTable() {
    const t = I18N[currentLang];
    const allHabits = getCurrentHabits();
    const habits = getFilteredHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const weekGroups = getWeekGroups(selectedYear, selectedMonth);

    const thead = document.getElementById('matrixTableHead');
    const tbody = document.getElementById('matrixTableBody');
    const tfoot = document.getElementById('matrixTableFoot');

    const todayDate = new Date();
    const isCurrentMonth = todayDate.getFullYear() === selectedYear && todayDate.getMonth() === selectedMonth;
    const currentDayNum = todayDate.getDate();

    // Row 1: Header groups
    let row1 = `<tr><th colspan="2" class="th-blank-corner">${t.habitsHeader} (${habits.length})</th>`;
    weekGroups.forEach(wg => {
      row1 += `<th colspan="${wg.days.length}" class="th-week-group">${wg.name.toUpperCase()}</th>`;
    });
    row1 += `<th colspan="5" class="th-analysis-title">${t.analysis.toUpperCase()}</th></tr>`;

    // Row 2: Day Names
    let row2 = `<tr><th colspan="2" class="th-day-name"></th>`;
    for (let day = 1; day <= daysCount; day++) {
      const dayOfWeek = new Date(selectedYear, selectedMonth, day).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isTodayClass = (isCurrentMonth && day === currentDayNum) ? 'is-today' : '';
      const weekendClass = isWeekend ? 'th-weekend' : '';
      row2 += `<th class="th-day-name ${weekendClass} ${isTodayClass}">${t.weekdays[dayOfWeek]}</th>`;
    }
    row2 += `
      <th class="th-analysis-sub">${t.goal}</th>
      <th class="th-analysis-sub">${t.actual}</th>
      <th class="th-analysis-sub">${t.left}</th>
      <th class="th-analysis-sub th-analysis-progress">${t.progress}</th>
      <th class="th-analysis-sub">%</th>
    </tr>`;

    // Row 3: Day Numbers
    let row3 = `<tr><th class="th-day-num td-habit-num">#</th><th class="th-day-num" style="text-align:left; padding-left:10px;">${t.habitNameHeader}</th>`;
    for (let day = 1; day <= daysCount; day++) {
      const isTodayClass = (isCurrentMonth && day === currentDayNum) ? 'is-today' : '';
      row3 += `<th class="th-day-num ${isTodayClass}">${day}</th>`;
    }
    row3 += `<th colspan="5" style="background:#fff; border-bottom:1px solid var(--border-light);"></th></tr>`;

    thead.innerHTML = row1 + row2 + row3;

    // Body
    let tbodyHtml = '';
    habits.forEach((habit, idx) => {
      let actualCount = 0;
      for (let d = 1; d <= daysCount; d++) {
        if (habit.checks && habit.checks[d]) actualCount++;
      }
      const goal = habit.goal || daysCount;
      const left = Math.max(0, goal - actualCount);
      const pct = Math.round((actualCount / goal) * 100);
      const streak = getHabitStreak(habit, daysCount);
      const displayName = getHabitDisplayName(habit);

      let rowHtml = `<tr>
        <td class="td-habit-num">${idx + 1}</td>
        <td class="td-habit-info">
          <div class="td-habit-title-wrap">
            <span>${habit.icon || '📌'} ${escapeHtml(displayName)} ${streak > 1 ? `<span class="habit-streak-badge">🔥${streak} ${t.streakUnit}</span>` : ''}</span>
            <span class="habit-row-actions">
              <button class="btn-mini-action" onclick="window.app.editHabit('${habit.id}')" title="Tahrirlash">✏️</button>
              <button class="btn-mini-action btn-del" onclick="window.app.deleteHabit('${habit.id}')" title="O'chirish">🗑️</button>
            </span>
          </div>
        </td>`;

      for (let day = 1; day <= daysCount; day++) {
        const isChecked = Boolean(habit.checks && habit.checks[day]);
        const isToday = isCurrentMonth && day === currentDayNum;
        const cellClass = isToday ? 'is-today' : '';
        const checkedClass = isChecked ? 'is-checked' : '';
        const hasNote = Boolean(habit.notes && habit.notes[day]);
        const noteText = hasNote ? habit.notes[day] : '';

        const isPast = isCurrentMonth && (day < currentDayNum);
        const isFuture = isCurrentMonth && (day > currentDayNum);
        const pastFutureClass = isPast ? 'is-past' : (isFuture ? 'is-future' : '');
        const lockTitle = isPast ? (currentLang === 'uz' ? '🔒 Qulflangan (2 marta tez bosing)' : '🔒 Locked (Double-click to edit)') : (hasNote ? '📝 ' + escapeHtml(noteText) : (isToday ? (currentLang === 'uz' ? '⭐ Bugun' : '⭐ Today') : ''));

        rowHtml += `
          <td class="td-check-cell ${cellClass} ${pastFutureClass}">
            <button type="button" class="check-box-btn ${checkedClass} ${hasNote ? 'has-note' : ''}" 
              data-habit-id="${habit.id}" 
              data-day="${day}"
              title="${lockTitle}"
              onclick="window.app.handleCellClick(event, '${habit.id}', ${day})"
              ondblclick="window.app.handleCellDblClick(event, '${habit.id}', ${day})"
              aria-label="${displayName} - ${day}">
            </button>
          </td>`;
      }

      rowHtml += `
        <td class="td-analysis-val td-analysis-goal">${goal}</td>
        <td class="td-analysis-val td-analysis-actual">${actualCount}</td>
        <td class="td-analysis-val td-analysis-left">${left}</td>
        <td class="td-analysis-bar">
          <div class="table-progress-track">
            <div class="table-progress-fill" style="width: ${Math.min(pct, 100)}%;"></div>
          </div>
        </td>
        <td class="td-analysis-val td-analysis-pct">${pct}%</td>
      </tr>`;

      tbodyHtml += rowHtml;
    });

    if (habits.length === 0) {
      tbodyHtml = `<tr><td colspan="${daysCount + 7}" style="padding:20px; color:#94a3b8; font-weight:600;">${t.noHabitsText}</td></tr>`;
    }

    tbody.innerHTML = tbodyHtml;

    // Foot
    let footTotalRow = `<tr><td colspan="2" class="td-summary-title">${t.totalCompleted}</td>`;
    let footPctRow = `<tr><td colspan="2" class="td-summary-title">${t.dailySuccessRate}</td>`;

    for (let day = 1; day <= daysCount; day++) {
      let dayCompleted = 0;
      allHabits.forEach(h => {
        if (h.checks && h.checks[day]) dayCompleted++;
      });
      const dayRate = allHabits.length > 0 ? Math.round((dayCompleted / allHabits.length) * 100) : 0;

      footTotalRow += `<td>${dayCompleted}</td>`;
      footPctRow += `<td>${dayRate}%</td>`;
    }

    footTotalRow += `<td colspan="5" style="background:#f8fafc;"></td></tr>`;
    footPctRow += `<td colspan="5" style="background:#f1f5f9;"></td></tr>`;

    tfoot.innerHTML = footTotalRow + footPctRow;
  }

  // 2. Render Daily Progress Bar Chart
  function renderDailyProgressChart() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const container = document.getElementById('dailyBarsContainer');
    document.getElementById('dailyChartMeta').textContent = `${daysCount} ${t.daysUnit}`;

    const todayDate = new Date();
    const isCurrentMonth = todayDate.getFullYear() === selectedYear && todayDate.getMonth() === selectedMonth;
    const currentDayNum = todayDate.getDate();

    let html = '';
    for (let day = 1; day <= daysCount; day++) {
      let completedCount = 0;
      habits.forEach(h => {
        if (h.checks && h.checks[day]) completedCount++;
      });
      const pct = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;
      const isToday = isCurrentMonth && day === currentDayNum;

      html += `
        <div class="daily-bar-col ${isToday ? 'today-col' : ''}" onclick="window.app.jumpToDay(${day})">
          <div class="daily-bar-fill" style="height: ${Math.max(pct, 3)}%;"></div>
          <span class="daily-bar-day">${day}</span>
          <div class="daily-bar-tooltip">
            ${currentLang === 'uz' ? `${day}-kun: ${completedCount}/${habits.length} (${Math.round(pct)}%)` : `Day ${day}: ${completedCount}/${habits.length} (${Math.round(pct)}%)`}
          </div>
        </div>`;
    }

    container.innerHTML = html;
  }

  // 3. Render Weekly Progress Bar Chart
  function renderWeeklyProgressChart() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const weekGroups = getWeekGroups(selectedYear, selectedMonth);
    const container = document.getElementById('weeklyBarsContainer');
    document.getElementById('weeklyChartMeta').textContent = `${weekGroups.length} ${t.weeksUnit}`;

    let html = '';
    weekGroups.forEach((wg) => {
      const totalPossible = habits.length * wg.days.length;
      let totalCompleted = 0;
      wg.days.forEach(day => {
        habits.forEach(h => {
          if (h.checks && h.checks[day]) totalCompleted++;
        });
      });

      const pct = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;

      html += `
        <div class="weekly-bar-col">
          <div class="weekly-bar-fill-track">
            <div class="weekly-bar-fill" style="height: ${Math.max(pct, 3)}%;">
              <span class="weekly-bar-val">${pct}%</span>
            </div>
          </div>
          <span class="weekly-bar-label">${wg.lowerName}</span>
        </div>`;
    });

    container.innerHTML = html;
  }

  // 4. Render Metrics & Donut Chart
  function renderMetricsAndDonut() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);

    let totalGoal = 0;
    let totalCompleted = 0;

    habits.forEach(h => {
      totalGoal += (h.goal || daysCount);
      for (let d = 1; d <= daysCount; d++) {
        if (h.checks && h.checks[d]) totalCompleted++;
      }
    });

    const totalLeft = Math.max(0, totalGoal - totalCompleted);
    const completionPct = totalGoal > 0 ? (totalCompleted / totalGoal) * 100 : 0;
    const leftPct = Math.max(0, 100 - completionPct);

    document.getElementById('kpiGoal').textContent = totalGoal;
    document.getElementById('kpiCompleted').textContent = totalCompleted;
    document.getElementById('kpiLeft').textContent = totalLeft;

    const circle = document.getElementById('donutCircleFill');
    const circumference = 2 * Math.PI * 60;
    const offset = circumference - (completionPct / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    document.getElementById('donutCompletedPct').textContent = `${completionPct.toFixed(1)}%`;
    document.getElementById('donutLeftPct').textContent = `${leftPct.toFixed(1)}%`;
    document.getElementById('donutCenterPct').textContent = `${Math.round(completionPct)}%`;
    document.getElementById('txtBajarildi').textContent = t.completedBadge;
  }

  // 5. Render Month Tabs
  function renderMonthTabs() {
    const t = I18N[currentLang];
    const container = document.getElementById('monthTabsStrip');
    let html = '';

    for (let m = 0; m < 12; m++) {
      const isActive = m === selectedMonth ? 'active' : '';
      let statText = '';
      if (appData[selectedYear] && appData[selectedYear][m]) {
        const mHabits = appData[selectedYear][m];
        const mDays = getDaysInMonth(selectedYear, m);
        let mTotal = 0;
        let mGoal = 0;
        mHabits.forEach(h => {
          mGoal += (h.goal || mDays);
          for (let d = 1; d <= mDays; d++) {
            if (h.checks && h.checks[d]) mTotal++;
          }
        });
        const mPct = mGoal > 0 ? Math.round((mTotal / mGoal) * 100) : 0;
        statText = `${mPct}%`;
      }

      html += `
        <button class="month-tab-btn ${isActive}" onclick="window.app.switchMonth(${m})">
          <span>${t.months[m]}</span>
          <span class="month-tab-stat">${statText}</span>
        </button>`;
    }

    container.innerHTML = html;
  }

  // 6. Render TOP 10 HABITS
  function renderTop10Habits() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const container = document.getElementById('topHabitsList');

    const rankedHabits = habits.map(h => {
      let actualCount = 0;
      for (let d = 1; d <= daysCount; d++) {
        if (h.checks && h.checks[d]) actualCount++;
      }
      const goal = h.goal || daysCount;
      const pct = Math.round((actualCount / goal) * 100);
      const streak = getHabitStreak(h, daysCount);

      return {
        id: h.id,
        name: getHabitDisplayName(h),
        icon: h.icon || '📌',
        pct: pct,
        actual: actualCount,
        streak: streak
      };
    });

    rankedHabits.sort((a, b) => b.pct - a.pct || b.actual - a.actual);
    const top10 = rankedHabits.slice(0, 10);

    let html = '';
    top10.forEach((item, index) => {
      const rank = index + 1;
      const rankClass = rank <= 3 ? `rank-${rank}` : '';

      html += `
        <div class="top-habit-item">
          <div class="top-habit-left">
            <span class="top-habit-rank ${rankClass}">${rank}</span>
            <span class="top-habit-name">${item.icon} ${escapeHtml(item.name)}</span>
          </div>
          <div class="top-habit-right">
            ${item.streak > 1 ? `<span class="top-habit-streak" title="Streak">🔥 ${item.streak} ${t.streakUnit}</span>` : ''}
            <span class="top-habit-pct-badge">${item.pct}%</span>
          </div>
        </div>`;
    });

    if (top10.length === 0) {
      html = `<div style="padding:12px; text-align:center; color:#94a3b8; font-size:0.8rem;">${t.noHabitsText}</div>`;
    }

    container.innerHTML = html;
  }

  // --- ACTIONS & CELL CLICK ---
  function playLockWarningSound() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const nowTime = ctx.currentTime;
      osc.frequency.setValueAtTime(240, nowTime);
      osc.frequency.setValueAtTime(200, nowTime + 0.05);
      gain.gain.setValueAtTime(0.12, nowTime);
      gain.gain.exponentialRampToValueAtTime(0.001, nowTime + 0.12);
      osc.start(nowTime);
      osc.stop(nowTime + 0.12);
    } catch (e) {}
  }

  function triggerCellShake(btn) {
    if (!btn) return;
    btn.classList.add('cell-shake');
    setTimeout(() => btn.classList.remove('cell-shake'), 320);
  }

  function handleCellClick(event, habitId, day) {
    if (event.shiftKey) {
      openNoteModal(habitId, day);
      return;
    }
    toggleDay(habitId, day);
  }

  function toggleDay(habitId, day) {
    const habits = getCurrentHabits();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    if (!habit.checks) habit.checks = {};
    const newState = !habit.checks[day];
    habit.checks[day] = newState;

    playClickSound(newState);

    if (newState) {
      const allDone = habits.every(h => h.checks && h.checks[day]);
      if (allDone) {
        playCelebrationChord();
        launchConfetti();
        showToast(currentLang === 'uz' ? `Ajoyib! ${day}-kundagi barcha odatlar bajarildi! 🏆` : `Brilliant! 100% completed for day ${day}! 🏆`);
      }
    }

    saveData();
    renderAll();
  }

  function checkAllToday() {
    const today = new Date();
    if (today.getFullYear() !== selectedYear || today.getMonth() !== selectedMonth) {
      jumpToToday();
    }
    const todayDay = today.getDate();
    const habits = getCurrentHabits();

    const anyUnchecked = habits.some(h => !(h.checks && h.checks[todayDay]));
    habits.forEach(h => {
      if (!h.checks) h.checks = {};
      h.checks[todayDay] = anyUnchecked;
    });

    if (anyUnchecked) {
      playCelebrationChord();
      launchConfetti();
      showToast(I18N[currentLang].toasts.allDoneToday);
    }

    saveData();
    renderAll();
  }

  function catchupYesterday() {
    const today = new Date();
    let yesterdayDay = today.getDate() - 1;
    if (yesterdayDay < 1) {
      showToast(currentLang === 'uz' ? 'Kechagi kun o\'tgan oyda edi.' : 'Yesterday was in previous month.');
      return;
    }
    const habits = getCurrentHabits();
    const anyUnchecked = habits.some(h => !(h.checks && h.checks[yesterdayDay]));
    habits.forEach(h => {
      if (!h.checks) h.checks = {};
      h.checks[yesterdayDay] = anyUnchecked;
    });
    playCelebrationChord();
    showToast(anyUnchecked ? I18N[currentLang].toasts.yesterdayFilled : I18N[currentLang].toasts.yesterdayCleared);
    saveData();
    renderAll();
  }

  function switchMonth(m) {
    selectedMonth = m;
    ensureMonthData(selectedYear, selectedMonth);
    renderAll();
  }

  function prevMonth() {
    if (selectedMonth === 0) {
      selectedMonth = 11;
      selectedYear--;
    } else {
      selectedMonth--;
    }
    ensureMonthData(selectedYear, selectedMonth);
    renderAll();
  }

  function nextMonth() {
    if (selectedMonth === 11) {
      selectedMonth = 0;
      selectedYear++;
    } else {
      selectedMonth++;
    }
    ensureMonthData(selectedYear, selectedMonth);
    renderAll();
  }

  function jumpToToday() {
    const d = new Date();
    selectedYear = d.getFullYear();
    selectedMonth = d.getMonth();
    ensureMonthData(selectedYear, selectedMonth);
    renderAll();
  }

  function jumpToDay(day) {
    const cell = document.querySelector(`.td-check-cell button[data-day="${day}"]`);
    if (cell) {
      cell.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      cell.focus();
    }
  }

  // --- HABIT MODAL (ADD / EDIT) ---
  const modal = document.getElementById('habitModal');
  const modalTitle = document.getElementById('modalTitle');
  const habitEditId = document.getElementById('habitEditId');
  const habitNameInput = document.getElementById('habitNameInput');
  const habitGoalInput = document.getElementById('habitGoalInput');
  const habitCategorySelect = document.getElementById('habitCategorySelect');
  const habitForm = document.getElementById('habitForm');

  function openAddModal() {
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    modalTitle.textContent = I18N[currentLang].addHabitModalTitle;
    habitEditId.value = '';
    habitNameInput.value = '';
    habitGoalInput.value = daysCount;
    habitGoalInput.max = daysCount;
    modal.classList.add('show');
    habitNameInput.focus();
  }

  function openEditModal(habitId) {
    const habits = getCurrentHabits();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    modalTitle.textContent = I18N[currentLang].editHabitModalTitle;
    habitEditId.value = habit.id;
    habitNameInput.value = getHabitDisplayName(habit);
    habitGoalInput.value = habit.goal || daysCount;
    habitGoalInput.max = daysCount;
    habitCategorySelect.value = habit.icon || '📚';
    modal.classList.add('show');
    habitNameInput.focus();
  }

  function closeModal() {
    modal.classList.remove('show');
  }

  habitForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = habitNameInput.value.trim();
    const goal = parseInt(habitGoalInput.value, 10) || getDaysInMonth(selectedYear, selectedMonth);
    const icon = habitCategorySelect.value;
    const editId = habitEditId.value;

    if (!name) return;

    const habits = getCurrentHabits();

    if (editId) {
      const habit = habits.find(h => h.id === editId);
      if (habit) {
        habit.name = name;
        if (currentLang === 'uz') habit.name_uz = name;
        else habit.name_en = name;
        habit.goal = goal;
        habit.icon = icon;
      }
    } else {
      const newHabit = {
        id: 'habit_' + Date.now(),
        name: name,
        name_uz: currentLang === 'uz' ? name : '',
        name_en: currentLang === 'en' ? name : '',
        icon: icon,
        goal: goal,
        checks: {},
        notes: {}
      };
      habits.push(newHabit);
    }

    saveData();
    closeModal();
    renderAll();
    showToast(I18N[currentLang].toasts.saved);
  });

  function deleteHabit(habitId) {
    if (!confirm(I18N[currentLang].confirmDelete)) return;
    let habits = getCurrentHabits();
    appData[selectedYear][selectedMonth] = habits.filter(h => h.id !== habitId);
    saveData();
    renderAll();
    showToast(I18N[currentLang].toasts.deleted);
  }

  function resetDemoData() {
    if (!confirm(I18N[currentLang].confirmDemo)) return;
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    appData[selectedYear][selectedMonth] = getPhotoDemoHabits(daysCount);
    saveData();
    renderAll();
    showToast(I18N[currentLang].toasts.demo);
  }

  function clearAllChecks() {
    if (!confirm(I18N[currentLang].confirmClear)) return;
    const habits = getCurrentHabits();
    habits.forEach(h => {
      h.checks = {};
    });
    saveData();
    renderAll();
    showToast(I18N[currentLang].toasts.cleared);
  }

  // --- AUTOMATION MODAL ---
  const autoModal = document.getElementById('autoModal');
  const autoNotificationToggle = document.getElementById('autoNotificationToggle');
  const morningTimeInput = document.getElementById('morningReminderTime');
  const eveningTimeInput = document.getElementById('eveningReminderTime');

  function openAutoModal() {
    autoNotificationToggle.checked = autoConfig.notificationsEnabled;
    morningTimeInput.value = autoConfig.morningTime || '09:00';
    eveningTimeInput.value = autoConfig.eveningTime || '21:00';
    renderForecastModalData();
    autoModal.classList.add('show');
  }

  function closeAutoModal() {
    autoModal.classList.remove('show');
  }

  autoNotificationToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      requestNotificationAccess();
    } else {
      autoConfig.notificationsEnabled = false;
      saveAutoConfig();
      showToast(currentLang === 'uz' ? 'Bildirishnomalar o\'chirildi.' : 'Notifications turned off.');
    }
  });

  morningTimeInput.addEventListener('change', (e) => {
    autoConfig.morningTime = e.target.value;
    saveAutoConfig();
  });

  eveningTimeInput.addEventListener('change', (e) => {
    autoConfig.eveningTime = e.target.value;
    saveAutoConfig();
  });

  document.getElementById('testNotificationBtn').addEventListener('click', () => {
    if (!('Notification' in window)) {
      showToast(currentLang === 'uz' ? 'Brauzeringiz Notification API ni qo\'llab-quvvatlamaydi.' : 'Browser does not support notifications.');
      return;
    }
    if (Notification.permission === 'granted') {
      new Notification(currentLang === 'uz' ? '🔔 Odatlar Nazorati (Sinov)' : '🔔 Habit Tracker Pro (Test)', {
        body: currentLang === 'uz' ? 'Ajoyib! Avtomatik bildirishnoma tizimi to\'liq ishlamoqda.' : 'Excellent! Notification engine is fully active.',
        icon: 'favicon.ico'
      });
      playClickSound(true);
      showToast(I18N[currentLang].toasts.testNotificationSent);
    } else {
      requestNotificationAccess();
    }
  });

  document.getElementById('restoreSnapshotBtn').addEventListener('click', restoreLatestSnapshot);

  // --- NOTE / JOURNAL MODAL ---
  let noteHabitId = null;
  let noteDayNum = null;
  const noteModal = document.getElementById('noteModal');
  const noteInput = document.getElementById('cellNoteInput');
  const noteModalTitle = document.getElementById('noteModalTitle');

  function openNoteModal(habitId, day) {
    const habits = getCurrentHabits();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    noteHabitId = habitId;
    noteDayNum = day;
    noteModalTitle.textContent = `📝 ${escapeHtml(getHabitDisplayName(habit))} (${day}-${currentLang === 'uz' ? 'kun' : 'day'})`;
    noteInput.value = (habit.notes && habit.notes[day]) || '';
    noteModal.classList.add('show');
    noteInput.focus();
  }

  function closeNoteModal() {
    noteModal.classList.remove('show');
    noteHabitId = null;
    noteDayNum = null;
  }

  document.getElementById('noteCloseBtn').addEventListener('click', closeNoteModal);
  document.getElementById('noteSaveBtn').addEventListener('click', () => {
    if (!noteHabitId || !noteDayNum) return;
    const habits = getCurrentHabits();
    const habit = habits.find(h => h.id === noteHabitId);
    if (habit) {
      if (!habit.notes) habit.notes = {};
      const val = noteInput.value.trim();
      if (val) {
        habit.notes[noteDayNum] = val;
      } else {
        delete habit.notes[noteDayNum];
      }
      saveData();
      renderAll();
      showToast(I18N[currentLang].toasts.noteSaved);
    }
    closeNoteModal();
  });

  document.getElementById('noteDeleteBtn').addEventListener('click', () => {
    if (!noteHabitId || !noteDayNum) return;
    const habits = getCurrentHabits();
    const habit = habits.find(h => h.id === noteHabitId);
    if (habit && habit.notes) {
      delete habit.notes[noteDayNum];
      saveData();
      renderAll();
      showToast(I18N[currentLang].toasts.noteDeleted);
    }
    closeNoteModal();
  });

  // --- ACHIEVEMENTS MODAL ---
  const badgesModal = document.getElementById('badgesModal');
  function openBadgesModal() {
    const t = I18N[currentLang];
    const g = computeGamification();
    document.getElementById('modalLevelTitle').textContent = `${g.level}-${t.levelTitle}: ${g.levelTitle}`;
    document.getElementById('modalXpSubtitle').textContent = `${t.badgesTotalXp}: ${g.xp} | ${t.badgesNextLevel}: ${g.nextXpRemaining} ${t.badgesLeft}`;

    const container = document.getElementById('badgesGridList');
    let html = '';
    g.badges.forEach(b => {
      html += `
        <div class="badge-card ${b.unlocked ? 'unlocked' : 'locked'}">
          <div class="badge-card-icon">${b.icon}</div>
          <div>
            <div class="badge-card-title">${b.title}</div>
            <div class="badge-card-desc">${b.desc}</div>
            <div class="badge-status">${b.unlocked ? `${t.badgeUnlocked} (+ ${b.xp} XP)` : t.badgeLocked}</div>
          </div>
        </div>`;
    });
    container.innerHTML = html;
    badgesModal.classList.add('show');
  }

  document.getElementById('badgesCloseBtn').addEventListener('click', () => badgesModal.classList.remove('show'));
  document.getElementById('badgesTriggerBtn').addEventListener('click', openBadgesModal);

  // --- SHORTCUTS MODAL ---
  const shortcutsModal = document.getElementById('shortcutsModal');
  document.getElementById('shortcutsBtn').addEventListener('click', () => shortcutsModal.classList.add('show'));
  document.getElementById('shortcutsCloseBtn').addEventListener('click', () => shortcutsModal.classList.remove('show'));

  // --- EXPORT & IMPORT ---
  function exportCsv() {
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const t = I18N[currentLang];

    let csv = '\uFEFF#;Habit Name;Goal;Actual;Left;Progress %;';
    for (let d = 1; d <= daysCount; d++) {
      csv += `Day ${d};`;
    }
    csv += '\n';

    habits.forEach((h, idx) => {
      let actual = 0;
      for (let d = 1; d <= daysCount; d++) {
        if (h.checks && h.checks[d]) actual++;
      }
      const goal = h.goal || daysCount;
      const left = Math.max(0, goal - actual);
      const pct = Math.round((actual / goal) * 100);
      const displayName = getHabitDisplayName(h);

      csv += `"${idx + 1}";"${displayName.replace(/"/g, '""')}";${goal};${actual};${left};${pct}%;`;
      for (let d = 1; d <= daysCount; d++) {
        csv += (h.checks && h.checks[d] ? '1;' : '0;');
      }
      csv += '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Habits_${t.months[selectedMonth]}_${selectedYear}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(t.toasts.csv);
  }

  function exportJson() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appData, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `Habits_Backup_${selectedYear}.json`;
    a.click();
    showToast(I18N[currentLang].toasts.jsonExport);
  }

  function handleJsonImport(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (typeof parsed === 'object') {
          appData = parsed;
          saveData();
          renderAll();
          showToast(I18N[currentLang].toasts.jsonImportSuccess);
        } else {
          showToast(I18N[currentLang].toasts.jsonImportError);
        }
      } catch (err) {
        showToast(I18N[currentLang].toasts.jsonImportError);
      }
    };
    reader.readAsText(file);
  }

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span><span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem(STORAGE_KEY_SOUND, soundEnabled);
    document.getElementById('soundIconOn').style.display = soundEnabled ? 'block' : 'none';
    document.getElementById('soundIconOff').style.display = soundEnabled ? 'none' : 'block';
    if (soundEnabled) {
      playClickSound(true);
      showToast(I18N[currentLang].toasts.soundOn);
    } else {
      showToast(I18N[currentLang].toasts.soundOff);
    }
  }

  function toggleLanguage() {
    currentLang = currentLang === 'uz' ? 'en' : 'uz';
    localStorage.setItem(STORAGE_KEY_LANG, currentLang);
    renderAll();
    showToast(currentLang === 'uz' ? 'Til: O\'zbekcha' : 'Language: English');
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Event listeners
  function initListeners() {
    document.getElementById('prevMonthBtn').addEventListener('click', prevMonth);
    document.getElementById('nextMonthBtn').addEventListener('click', nextMonth);
    document.getElementById('todayJumpBtn').addEventListener('click', jumpToToday);
    document.getElementById('checkAllTodayBtn').addEventListener('click', checkAllToday);
    document.getElementById('catchupYesterdayBtn').addEventListener('click', catchupYesterday);
    document.getElementById('addHabitBtn').addEventListener('click', openAddModal);
    document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('demoDataBtn').addEventListener('click', resetDemoData);
    document.getElementById('langSwitchBtn').addEventListener('click', toggleLanguage);
    document.getElementById('soundToggleBtn').addEventListener('click', toggleSound);
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    document.getElementById('autoSettingsBtn').addEventListener('click', openAutoModal);
    document.getElementById('autoModalCloseBtn').addEventListener('click', closeAutoModal);
    document.getElementById('openAutoModalFromMenu').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('exportDropdown').classList.remove('show');
      openAutoModal();
    });

    const catContainer = document.getElementById('categoryTabsContainer');
    catContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      catContainer.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.dataset.cat;
      renderMatrixTable();
    });

    const searchInput = document.getElementById('habitSearchInput');
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMatrixTable();
    });

    const exportBtn = document.getElementById('exportMenuBtn');
    const dropdown = document.getElementById('exportDropdown');
    exportBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => dropdown.classList.remove('show'));

    document.getElementById('exportCsvBtn').addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('show');
      exportCsv();
    });

    document.getElementById('exportJsonBtn').addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('show');
      exportJson();
    });

    const fileInput = document.getElementById('jsonFileInput');
    document.getElementById('importJsonTrigger').addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('show');
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      handleJsonImport(e.target.files[0]);
      fileInput.value = '';
    });

    document.getElementById('clearChecksBtn').addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('show');
      clearAllChecks();
    });

    window.addEventListener('keydown', (e) => {
      const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
      if (e.key === 'Escape') {
        closeModal();
        closeNoteModal();
        closeAutoModal();
        shortcutsModal.classList.remove('show');
        badgesModal.classList.remove('show');
        return;
      }
      if (isInput) return;

      if (e.key === 't' || e.key === 'T') {
        jumpToToday();
      } else if (e.key === 'a' || e.key === 'A') {
        openAddModal();
      } else if (e.key === 'd' || e.key === 'D') {
        resetDemoData();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleSound();
      } else if (e.key === 'p' || e.key === 'P') {
        window.print();
      } else if (e.key === '?') {
        shortcutsModal.classList.add('show');
      }
    });

    document.getElementById('soundIconOn').style.display = soundEnabled ? 'block' : 'none';
    document.getElementById('soundIconOff').style.display = soundEnabled ? 'none' : 'block';
  }

  window.app = {
    handleCellClick: handleCellClick,
    handleCellDblClick: handleCellDblClick,
    editHabit: openEditModal,
    deleteHabit: deleteHabit,
    switchMonth: switchMonth,
    jumpToDay: jumpToDay
  };

  document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initListeners();
    initAutomationWorker();
    renderAll();
  });

})();
