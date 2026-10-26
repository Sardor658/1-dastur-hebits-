/**
 * EXECUTIVE HABIT TRACKER PRO
 * Exact match to original reference layout + Past days locked + Double-click to unlock
 */

(function () {
  'use strict';

  // --- DICTIONARY ---
  const I18N = {
    uz: {
      appName: 'ODATLAR NAZORATI',
      subtitle: 'Oylik odatlar va maqsadlar nazorat paneli',
      months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
      weekdays: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
      weekdaysLong: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
      dailyProgress: 'Daily Progress',
      weeklyProgress: 'Weekly Progress',
      goal: 'Goal',
      completed: 'Completed',
      left: 'Left',
      completedBadge: 'Bajarildi',
      analysis: 'Analysis',
      progress: 'Progress',
      top10: 'TOP 10 HABITS',
      top10Badge: '10 ta odat',
      addHabit: 'Yangi Odat',
      demo: 'Demo',
      export: 'Eksport',
      today: 'Bugun',
      totalCompleted: 'Jami Bajarildi',
      dailySuccessRate: 'Muvaffaqiyat %',
      monthNav: 'OYLAR NAVIGATSIYASI',
      monthHint: 'Har bir oyni alohida kuzatish uchun bosing',
      addHabitTitle: 'Yangi Odat Qo\'shish',
      editHabitTitle: 'Odatni Tahrirlash',
      nameLabel: 'Odat Nomi',
      goalLabel: 'Oylik Maqsad (kun)',
      categoryLabel: 'Kategoriya / Icon',
      cancel: 'Bekor qilish',
      save: 'Saqlash',
      toastSaved: 'Odat muvaffaqiyatli saqlandi!',
      toastDeleted: 'Odat o\'chirildi.',
      toastDemoReset: 'Namunaviy ma\'lumotlar yuklandi!',
      toastExportCsv: 'Excel fayl (CSV) yuklab olindi!',
      toastExportJson: 'JSON zaxira fayli yuklab olindi!',
      toastImportSuccess: 'Ma\'lumotlar muvaffaqiyatli tiklandi!',
      toastImportError: 'Faylni o\'qishda xatolik yuz berdi.',
      toastCleared: 'Barcha belgilar tozalandi! O\'zingiz belgilashni boshlang.',
      confirmDelete: 'Ushbu odatni o\'chirishni xohlaysizmi?',
      confirmClear: 'Ushbu oydagi barcha belgilarni tozalab, noldan boshlashni tasdiqlaysizmi?',
      confirmDemo: 'Namunaviy ma\'lumotlarni ko\'rishni xohlaysizmi?',
      week: 'Hafta',
      streak: 'kun',
      quotes: [
        'Kichik kundalik odatlar buyuk natijalarga olib keladi.',
        'Intizom — bu orzular va maqsadlar orasidagi mustahkam ko\'prikdir.',
        'Bugun qilgan 1% yaxshilanish yil oxirida 37 barobar o\'sish beradi.',
        'Muvaffaqiyat — bu bir kunlik natija emas, balki har kungi odat.',
        'O\'zingizga bergan va\'dani bajarish — eng buyuk g\'alabadir.'
      ]
    },
    en: {
      appName: 'HABIT TRACKER',
      subtitle: 'Executive Monthly Habit & Performance Dashboard',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      weekdaysLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dailyProgress: 'Daily Progress',
      weeklyProgress: 'Weekly Progress',
      goal: 'Goal',
      completed: 'Completed',
      left: 'Left',
      completedBadge: 'Completed',
      analysis: 'Analysis',
      progress: 'Progress',
      top10: 'TOP 10 HABITS',
      top10Badge: '10 habits',
      addHabit: 'Add Habit',
      demo: 'Demo',
      export: 'Export',
      today: 'Today',
      totalCompleted: 'Total Completed',
      dailySuccessRate: 'Success Rate %',
      monthNav: 'MONTH NAVIGATION',
      monthHint: 'Click to inspect or record individual months',
      addHabitTitle: 'Add New Habit',
      editHabitTitle: 'Edit Habit',
      nameLabel: 'Habit Name',
      goalLabel: 'Monthly Goal (days)',
      categoryLabel: 'Category / Icon',
      cancel: 'Cancel',
      save: 'Save',
      toastSaved: 'Habit saved successfully!',
      toastDeleted: 'Habit deleted.',
      toastDemoReset: 'Reference demo data loaded!',
      toastExportCsv: 'CSV file exported successfully!',
      toastExportJson: 'JSON backup file exported!',
      toastImportSuccess: 'Data imported successfully!',
      toastImportError: 'Invalid JSON file format.',
      toastCleared: 'All checkmarks cleared! Ready for fresh tracking.',
      confirmDelete: 'Are you sure you want to delete this habit?',
      confirmClear: 'Clear all checkmarks for this month to start fresh?',
      confirmDemo: 'Load demo reference values?',
      week: 'Week',
      streak: 'days',
      quotes: [
        'Small daily habits compound into remarkable lifelong success.',
        'Discipline is the bridge between goals and accomplishments.',
        '1% better every day yields a 37x transformation over a year.',
        'Success is not an event, it is the result of daily consistency.',
        'Keeping promises to yourself builds unshakable self-confidence.'
      ]
    }
  };

  // Storage Keys
  const STORAGE_KEY_DATA = 'executive_habits_store_v5';
  const STORAGE_KEY_LANG = 'executive_habits_lang_v5';
  const STORAGE_KEY_SOUND = 'executive_habits_sound_v5';

  // State: Set default to current real date: October (9) 2026, today = 26
  let currentLang = 'uz';
  try {
    const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
    if (savedLang) currentLang = savedLang;
  } catch (e) {}

  let soundEnabled = true;
  try {
    const savedSound = localStorage.getItem(STORAGE_KEY_SOUND);
    if (savedSound !== null) soundEnabled = savedSound !== 'false';
  } catch (e) {}

  const realNow = new Date();
  let selectedYear = realNow.getFullYear(); // 2026
  let selectedMonth = realNow.getMonth();   // October is 9

  let activeCategoryFilter = 'all';
  let searchQuery = '';
  let appData = {};

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
      osc.frequency.setValueAtTime(260, nowTime);
      osc.frequency.setValueAtTime(220, nowTime + 0.04);
      gain.gain.setValueAtTime(0.12, nowTime);
      gain.gain.exponentialRampToValueAtTime(0.001, nowTime + 0.1);
      osc.start(nowTime);
      osc.stop(nowTime + 0.1);
    } catch (e) {}
  }

  function triggerCellShake(btn) {
    if (!btn) return;
    btn.classList.add('cell-shake');
    setTimeout(() => btn.classList.remove('cell-shake'), 320);
  }

  // --- DEFAULT FRESH HABITS ---
  function getDefaultEmptyHabits(daysCount) {
    const list = [
      { name: 'Reading / Learning', icon: '📚' },
      { name: 'Project Work', icon: '💻' },
      { name: 'Plan Tomorrow', icon: '⏰' },
      { name: 'Wake Up Early (6 AM)', icon: '☀️' },
      { name: 'Workout / Exercise', icon: '💪' },
      { name: 'Drink 2.5L Water', icon: '💧' },
      { name: 'Meditation (15m)', icon: '🧘' },
      { name: 'Day Reflection', icon: '📝' },
      { name: 'Walk 10,000 Steps', icon: '🚶' },
      { name: 'Deep Work (4 Hours)', icon: '🎯' },
      { name: 'Healthy Nutrition', icon: '🥗' },
      { name: 'Sleep 8 Hours', icon: '🌙' }
    ];

    return list.map((item, index) => ({
      id: 'habit_' + (Date.now() + index),
      name: item.name,
      icon: item.icon,
      goal: daysCount,
      checks: {},
      notes: {}
    }));
  }

  // --- DEMO HABITS ---
  function getPhotoDemoHabits(daysInMonth) {
    const targets = [
      { name: 'Reading / Learning', icon: '📚', count: 21 },
      { name: 'Project Work', icon: '💻', count: 21 },
      { name: 'Plan Tomorrow', icon: '⏰', count: 24 },
      { name: 'Wake Up Early (6 AM)', icon: '☀️', count: 21 },
      { name: 'Workout / Exercise', icon: '💪', count: 7 },
      { name: 'Drink 2.5L Water', icon: '💧', count: 23 },
      { name: 'Meditation (15m)', icon: '🧘', count: 22 },
      { name: 'Day Reflection', icon: '📝', count: 23 },
      { name: 'Walk 10,000 Steps', icon: '🚶', count: 21 },
      { name: 'Deep Work (4 Hours)', icon: '🎯', count: 21 },
      { name: 'Healthy Nutrition', icon: '🥗', count: 22 },
      { name: 'Sleep 8 Hours', icon: '🌙', count: 22 }
    ];

    return targets.map((item, index) => {
      const checks = {};
      let remaining = item.count;

      if (item.count === 7) {
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
        name: item.name,
        icon: item.icon,
        goal: daysInMonth,
        checks: checks,
        notes: {}
      };
    });
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

    for (let day = 1; day <= daysCount; day++) {
      currentDays.push(day);
      const date = new Date(year, month, day);
      if (date.getDay() === 6 || day === daysCount) {
        groups.push({
          name: `HAFTA ${currentWeek}`,
          lowerName: `week ${currentWeek}`,
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
    for (let d = daysCount; d >= 1; d--) {
      if (habit.checks && habit.checks[d]) {
        streak++;
      } else if (streak > 0) {
        break;
      }
    }
    return streak;
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
  }

  function updateLanguageTexts() {
    const t = I18N[currentLang];
    const setSafe = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setSafe('headerSubtitle', t.subtitle);
    setSafe('txtAddHabit', t.addHabit);
    setSafe('txtDemo', t.demo);
    setSafe('txtExport', t.export);
    setSafe('todayJumpBtn', t.today);

    setSafe('txtDailyProgress', t.dailyProgress);
    setSafe('txtWeeklyProgress', t.weeklyProgress);
    setSafe('txtGoalLabel', t.goal);
    setSafe('txtCompletedLabel', t.completed);
    setSafe('txtLeftLabel', t.left);
    setSafe('txtBajarildi', t.completedBadge);

    setSafe('txtMonthNavigation', t.monthNav);
    setSafe('txtMonthHint', t.monthHint);
    setSafe('txtTop10Title', t.top10);
    setSafe('topHabitsBadge', t.top10Badge);

    setSafe('currentLangText', currentLang.toUpperCase());
  }

  function renderMonthPicker() {
    const t = I18N[currentLang];
    const mName = document.getElementById('currentMonthName');
    const yLabel = document.getElementById('currentYearLabel');
    if (mName) mName.textContent = t.months[selectedMonth];
    if (yLabel) yLabel.textContent = selectedYear;
  }

  function renderTodayFocusBar() {
    const t = I18N[currentLang];
    const habits = getCurrentHabits();
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === selectedYear && today.getMonth() === selectedMonth;
    const todayDay = today.getDate(); // 26

    const dNameEl = document.getElementById('todayDayNameLabel');
    const dNumEl = document.getElementById('todayDayNumLabel');
    if (dNameEl) dNameEl.textContent = t.weekdaysLong[today.getDay()];
    if (dNumEl) dNumEl.textContent = todayDay;

    let doneCount = 0;
    if (isCurrentMonth) {
      habits.forEach(h => {
        if (h.checks && h.checks[todayDay]) doneCount++;
      });
    }

    const pct = habits.length > 0 ? Math.round((doneCount / habits.length) * 100) : 0;
    const heading = document.getElementById('todayStatusHeading');
    if (heading) {
      heading.innerHTML = `Bugungi Natija: <span id="todayCountDone">${doneCount}</span> / <span id="todayTotalCount">${habits.length}</span> bajarildi (<span id="todayPctDone">${pct}%</span>)`;
    }
    const fill = document.getElementById('todayMiniProgressFill');
    if (fill) fill.style.width = `${pct}%`;

    const quoteEl = document.getElementById('dailyQuoteText');
    if (quoteEl) {
      const quoteIndex = (today.getDate() + selectedMonth) % t.quotes.length;
      quoteEl.textContent = t.quotes[quoteIndex];
    }
  }

  function renderCategoryTabs() {
    const habits = getCurrentHabits();
    const container = document.getElementById('categoryTabsContainer');
    if (!container) return;

    const cats = [
      { id: 'all', label: 'Barchasi', count: habits.length },
      { id: '📚', label: '📚 Ta\'lim', count: habits.filter(h => h.icon === '📚').length },
      { id: '💻', label: '💻 Ish / Kod', count: habits.filter(h => h.icon === '💻').length },
      { id: '💪', label: '💪 Sport', count: habits.filter(h => h.icon === '💪').length },
      { id: '💧', label: '💧 Salomatlik', count: habits.filter(h => h.icon === '💧').length },
      { id: '🧘', label: '🧘 Ruh / Intizom', count: habits.filter(h => h.icon === '🧘').length }
    ];

    container.innerHTML = cats.map(c => `
      <button class="cat-pill ${activeCategoryFilter === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label} (${c.count})</button>
    `).join('');
  }

  function getFilteredHabits() {
    let habits = getCurrentHabits();
    if (activeCategoryFilter !== 'all') {
      habits = habits.filter(h => h.icon === activeCategoryFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      habits = habits.filter(h => h.name.toLowerCase().includes(q));
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

    if (!thead || !tbody || !tfoot) return;

    const todayDate = new Date();
    const isCurrentMonth = todayDate.getFullYear() === selectedYear && todayDate.getMonth() === selectedMonth;
    const currentDayNum = todayDate.getDate(); // 26

    // Row 1: Header groups
    let row1 = `<tr><th colspan="2" class="th-blank-corner">HABITS (${habits.length})</th>`;
    weekGroups.forEach(wg => {
      row1 += `<th colspan="${wg.days.length}" class="th-week-group">${wg.name}</th>`;
    });
    row1 += `<th colspan="5" class="th-analysis-title">ANALYSIS</th></tr>`;

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
      <th class="th-analysis-sub">Goal</th>
      <th class="th-analysis-sub">Actual</th>
      <th class="th-analysis-sub">Left</th>
      <th class="th-analysis-sub th-analysis-progress">Progress</th>
      <th class="th-analysis-sub">%</th>
    </tr>`;

    // Row 3: Day Numbers
    let row3 = `<tr><th class="th-day-num td-habit-num">#</th><th class="th-day-num" style="text-align:left; padding-left:10px;">HABIT NAME</th>`;
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

      let rowHtml = `<tr>
        <td class="td-habit-num">${idx + 1}</td>
        <td class="td-habit-info">
          <div class="td-habit-title-wrap">
            <span>${habit.icon || '📌'} ${escapeHtml(habit.name)} ${streak > 1 ? `<span class="habit-streak-badge">🔥${streak}</span>` : ''}</span>
            <span class="habit-row-actions">
              <button class="btn-mini-action" onclick="window.app.editHabit('${habit.id}')" title="Tahrirlash">✏️</button>
              <button class="btn-mini-action btn-del" onclick="window.app.deleteHabit('${habit.id}')" title="O'chirish">🗑️</button>
            </span>
          </div>
        </td>`;

      for (let day = 1; day <= daysCount; day++) {
        const isChecked = Boolean(habit.checks && habit.checks[day]);
        const isToday = isCurrentMonth && day === currentDayNum;
        const isPast = isCurrentMonth && (day < currentDayNum);
        const isFuture = isCurrentMonth && (day > currentDayNum);

        const cellClass = isToday ? 'is-today' : (isPast ? 'is-past' : (isFuture ? 'is-future' : ''));
        const checkedClass = isChecked ? 'is-checked' : '';
        const hasNote = Boolean(habit.notes && habit.notes[day]);
        const lockTitle = isPast ? '🔒 Qulflangan (2 marta tez bosing)' : (isToday ? '⭐ Bugun (26-oktyabr)' : '');

        rowHtml += `
          <td class="td-check-cell ${cellClass}">
            <button type="button" class="check-box-btn ${checkedClass} ${hasNote ? 'has-note' : ''}" 
              data-habit-id="${habit.id}" 
              data-day="${day}"
              title="${lockTitle}"
              onclick="window.app.handleCellClick(event, '${habit.id}', ${day})"
              aria-label="${habit.name} - ${day}">
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
      tbodyHtml = `<tr><td colspan="${daysCount + 7}" style="padding:20px; color:#94a3b8; font-weight:600;">Hech qanday odat topilmadi.</td></tr>`;
    }

    tbody.innerHTML = tbodyHtml;

    // Foot
    let footTotalRow = `<tr><td colspan="2" class="td-summary-title">Jami Bajarildi</td>`;
    let footPctRow = `<tr><td colspan="2" class="td-summary-title">Muvaffaqiyat %</td>`;

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
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const container = document.getElementById('dailyBarsContainer');
    const meta = document.getElementById('dailyChartMeta');
    if (meta) meta.textContent = `${daysCount} kun`;
    if (!container) return;

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
            ${day}-kun: ${completedCount}/${habits.length} (${Math.round(pct)}%)
          </div>
        </div>`;
    }

    container.innerHTML = html;
  }

  // 3. Render Weekly Progress Bar Chart
  function renderWeeklyProgressChart() {
    const habits = getCurrentHabits();
    const weekGroups = getWeekGroups(selectedYear, selectedMonth);
    const container = document.getElementById('weeklyBarsContainer');
    const meta = document.getElementById('weeklyChartMeta');
    if (meta) meta.textContent = `${weekGroups.length} hafta`;
    if (!container) return;

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

    const goalEl = document.getElementById('kpiGoal');
    const compEl = document.getElementById('kpiCompleted');
    const leftEl = document.getElementById('kpiLeft');
    if (goalEl) goalEl.textContent = totalGoal;
    if (compEl) compEl.textContent = totalCompleted;
    if (leftEl) leftEl.textContent = totalLeft;

    const circle = document.getElementById('donutCircleFill');
    if (circle) {
      const circumference = 2 * Math.PI * 60;
      const offset = circumference - (completionPct / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }

    const dComp = document.getElementById('donutCompletedPct');
    const dLeft = document.getElementById('donutLeftPct');
    const dCenter = document.getElementById('donutCenterPct');
    if (dComp) dComp.textContent = `${completionPct.toFixed(1)}%`;
    if (dLeft) dLeft.textContent = `${leftPct.toFixed(1)}%`;
    if (dCenter) dCenter.textContent = `${Math.round(completionPct)}%`;
  }

  // 5. Render Month Tabs
  function renderMonthTabs() {
    const t = I18N[currentLang];
    const container = document.getElementById('monthTabsStrip');
    if (!container) return;
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
    const habits = getCurrentHabits();
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    const container = document.getElementById('topHabitsList');
    if (!container) return;

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
        name: h.name,
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
            ${item.streak > 1 ? `<span class="top-habit-streak" title="Streak">🔥 ${item.streak} kun</span>` : ''}
            <span class="top-habit-pct-badge">${item.pct}%</span>
          </div>
        </div>`;
    });

    if (top10.length === 0) {
      html = `<div style="padding:12px; text-align:center; color:#94a3b8; font-size:0.8rem;">Hech qanday odat mavjud emas</div>`;
    }

    container.innerHTML = html;
  }

  // --- ACTIONS & CELL CLICK WITH PAST DAY BLOCKING & FAST DOUBLE-CLICK ---
  let lastClickTime = 0;
  let lastClickCellKey = null;

  function handleCellClick(event, habitId, day) {
    const btn = event.currentTarget || event.target.closest('.check-box-btn');
    if (event.shiftKey) {
      openNoteModal(habitId, day);
      return;
    }

    const today = new Date();
    const isCurrentMonth = today.getFullYear() === selectedYear && today.getMonth() === selectedMonth;
    const currentDayNum = today.getDate(); // 26-oktyabr

    const isPast = isCurrentMonth && (day < currentDayNum);
    const isFuture = isCurrentMonth && (day > currentDayNum);

    const cellKey = `${habitId}_${day}`;
    const nowTime = Date.now();
    const isFastDblClick = (lastClickCellKey === cellKey && (nowTime - lastClickTime) < 420);
    lastClickTime = nowTime;
    lastClickCellKey = cellKey;

    // Past Days (1..25): Block single click, unlock on fast double click!
    if (isPast) {
      if (isFastDblClick) {
        // Double-click detected! Unlock and toggle!
        toggleDay(habitId, day);
        showToast(`🔓 ${day}-kun ochildi va belgilandi!`);
      } else {
        // Single click: BLOCK!
        playLockWarningSound();
        triggerCellShake(btn);
        showToast('🔒 O\'tgan kunlar qulflangan! Belgilash uchun 2 marta tez bosing.');
      }
      return;
    }

    // Future Days (27..31): Block single click, allow on fast double click
    if (isFuture) {
      if (isFastDblClick) {
        toggleDay(habitId, day);
        showToast(`🔓 ${day}-kun belgilandi.`);
      } else {
        playLockWarningSound();
        triggerCellShake(btn);
        showToast('⏳ Kelgusi kun! Belgilash uchun 2 marta tez bosing.');
      }
      return;
    }

    // Today (26-oktyabr): Free single click!
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
        showToast(`Ajoyib! ${day}-kundagi barcha odatlar bajarildi! 🏆`);
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
      showToast('Bugungi barcha odatlar bajarildi deb belgilandi! ⚡');
    }

    saveData();
    renderAll();
  }

  function catchupYesterday() {
    const today = new Date();
    let yesterdayDay = today.getDate() - 1;
    if (yesterdayDay < 1) {
      showToast('Kechagi kun o\'tgan oyda edi.');
      return;
    }
    const habits = getCurrentHabits();
    const anyUnchecked = habits.some(h => !(h.checks && h.checks[yesterdayDay]));
    habits.forEach(h => {
      if (!h.checks) h.checks = {};
      h.checks[yesterdayDay] = anyUnchecked;
    });
    showToast(anyUnchecked ? 'Kechagi kungi odatlar to\'ldirildi! ↩' : 'Kechagi kungi belgilar tozalandi.');
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
    if (modalTitle) modalTitle.textContent = 'Yangi Odat Qo\'shish';
    if (habitEditId) habitEditId.value = '';
    if (habitNameInput) habitNameInput.value = '';
    if (habitGoalInput) {
      habitGoalInput.value = daysCount;
      habitGoalInput.max = daysCount;
    }
    if (modal) modal.classList.add('show');
    if (habitNameInput) habitNameInput.focus();
  }

  function openEditModal(habitId) {
    const habits = getCurrentHabits();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    if (modalTitle) modalTitle.textContent = 'Odatni Tahrirlash';
    if (habitEditId) habitEditId.value = habit.id;
    if (habitNameInput) habitNameInput.value = habit.name;
    if (habitGoalInput) {
      habitGoalInput.value = habit.goal || daysCount;
      habitGoalInput.max = daysCount;
    }
    if (habitCategorySelect) habitCategorySelect.value = habit.icon || '📚';
    if (modal) modal.classList.add('show');
    if (habitNameInput) habitNameInput.focus();
  }

  function closeModal() {
    if (modal) modal.classList.remove('show');
  }

  if (habitForm) {
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
          habit.goal = goal;
          habit.icon = icon;
        }
      } else {
        const newHabit = {
          id: 'habit_' + Date.now(),
          name: name,
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
      showToast('Odat muvaffaqiyatli saqlandi!');
    });
  }

  function deleteHabit(habitId) {
    if (!confirm('Ushbu odatni o\'chirishni xohlaysizmi?')) return;
    let habits = getCurrentHabits();
    appData[selectedYear][selectedMonth] = habits.filter(h => h.id !== habitId);
    saveData();
    renderAll();
    showToast('Odat o\'chirildi.');
  }

  function resetDemoData() {
    if (!confirm('Namunaviy ma\'lumotlarni ko\'rishni xohlaysizmi?')) return;
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    appData[selectedYear][selectedMonth] = getPhotoDemoHabits(daysCount);
    saveData();
    renderAll();
    showToast('Namunaviy ma\'lumotlar yuklandi!');
  }

  function clearAllChecks() {
    if (!confirm('Ushbu oydagi barcha belgilarni tozalab, noldan boshlashni tasdiqlaysizmi?')) return;
    const habits = getCurrentHabits();
    habits.forEach(h => {
      h.checks = {};
    });
    saveData();
    renderAll();
    showToast('Barcha belgilar tozalandi! O\'zingiz belgilashni boshlang.');
  }

  // --- NOTE MODAL ---
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
    if (noteModalTitle) noteModalTitle.textContent = `📝 ${escapeHtml(habit.name)} (${day}-kun)`;
    if (noteInput) {
      noteInput.value = (habit.notes && habit.notes[day]) || '';
      if (noteModal) noteModal.classList.add('show');
      noteInput.focus();
    }
  }

  function closeNoteModal() {
    if (noteModal) noteModal.classList.remove('show');
    noteHabitId = null;
    noteDayNum = null;
  }

  const noteClose = document.getElementById('noteCloseBtn');
  if (noteClose) noteClose.addEventListener('click', closeNoteModal);

  const noteSave = document.getElementById('noteSaveBtn');
  if (noteSave) {
    noteSave.addEventListener('click', () => {
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
        showToast('Izoh saqlandi!');
      }
      closeNoteModal();
    });
  }

  const noteDel = document.getElementById('noteDeleteBtn');
  if (noteDel) {
    noteDel.addEventListener('click', () => {
      if (!noteHabitId || !noteDayNum) return;
      const habits = getCurrentHabits();
      const habit = habits.find(h => h.id === noteHabitId);
      if (habit && habit.notes) {
        delete habit.notes[noteDayNum];
        saveData();
        renderAll();
        showToast('Izoh o\'chirildi.');
      }
      closeNoteModal();
    });
  }

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

      csv += `"${idx + 1}";"${h.name.replace(/"/g, '""')}";${goal};${actual};${left};${pct}%;`;
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
    showToast('Excel fayl (CSV) yuklab olindi!');
  }

  function exportJson() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appData, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `Habits_Backup_${selectedYear}.json`;
    a.click();
    showToast('JSON zaxira fayli yuklab olindi!');
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
          showToast('Ma\'lumotlar muvaffaqiyatli tiklandi!');
        } else {
          showToast('Faylni o\'qishda xatolik yuz berdi.');
        }
      } catch (err) {
        showToast('Faylni o\'qishda xatolik yuz berdi.');
      }
    };
    reader.readAsText(file);
  }

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
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
    try { localStorage.setItem(STORAGE_KEY_SOUND, soundEnabled); } catch (e) {}
    const sOn = document.getElementById('soundIconOn');
    const sOff = document.getElementById('soundIconOff');
    if (sOn) sOn.style.display = soundEnabled ? 'block' : 'none';
    if (sOff) sOff.style.display = soundEnabled ? 'none' : 'block';
    if (soundEnabled) {
      playClickSound(true);
      showToast('Ovoz yoqildi');
    } else {
      showToast('Ovoz o\'chirildi');
    }
  }

  function toggleLanguage() {
    currentLang = currentLang === 'uz' ? 'en' : 'uz';
    try { localStorage.setItem(STORAGE_KEY_LANG, currentLang); } catch (e) {}
    renderAll();
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

  // --- EVENT LISTENERS ---
  function initListeners() {
    const on = (id, event, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(event, fn);
    };

    on('prevMonthBtn', 'click', prevMonth);
    on('nextMonthBtn', 'click', nextMonth);
    on('todayJumpBtn', 'click', jumpToToday);
    on('checkAllTodayBtn', 'click', checkAllToday);
    on('catchupYesterdayBtn', 'click', catchupYesterday);
    on('addHabitBtn', 'click', openAddModal);
    on('modalCloseBtn', 'click', closeModal);
    on('modalCancelBtn', 'click', closeModal);
    on('demoDataBtn', 'click', resetDemoData);
    on('langSwitchBtn', 'click', toggleLanguage);
    on('soundToggleBtn', 'click', toggleSound);
    on('printBtn', 'click', () => window.print());

    const catContainer = document.getElementById('categoryTabsContainer');
    if (catContainer) {
      catContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-pill');
        if (!btn) return;
        catContainer.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategoryFilter = btn.dataset.cat;
        renderMatrixTable();
      });
    }

    const searchInput = document.getElementById('habitSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderMatrixTable();
      });
    }

    const exportBtn = document.getElementById('exportMenuBtn');
    const dropdown = document.getElementById('exportDropdown');
    if (exportBtn && dropdown) {
      exportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      });
      document.addEventListener('click', () => dropdown.classList.remove('show'));
    }

    on('exportCsvBtn', 'click', (e) => {
      e.preventDefault();
      if (dropdown) dropdown.classList.remove('show');
      exportCsv();
    });

    on('exportJsonBtn', 'click', (e) => {
      e.preventDefault();
      if (dropdown) dropdown.classList.remove('show');
      exportJson();
    });

    const fileInput = document.getElementById('jsonFileInput');
    on('importJsonTrigger', 'click', (e) => {
      e.preventDefault();
      if (dropdown) dropdown.classList.remove('show');
      if (fileInput) fileInput.click();
    });

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        handleJsonImport(e.target.files[0]);
        fileInput.value = '';
      });
    }

    on('clearChecksBtn', 'click', (e) => {
      e.preventDefault();
      if (dropdown) dropdown.classList.remove('show');
      clearAllChecks();
    });

    // Shortcuts modal
    const sModal = document.getElementById('shortcutsModal');
    on('shortcutsBtn', 'click', () => { if (sModal) sModal.classList.add('show'); });
    on('shortcutsCloseBtn', 'click', () => { if (sModal) sModal.classList.remove('show'); });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
      if (e.key === 'Escape') {
        closeModal();
        closeNoteModal();
        if (sModal) sModal.classList.remove('show');
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
        if (sModal) sModal.classList.add('show');
      }
    });

    const sOn = document.getElementById('soundIconOn');
    const sOff = document.getElementById('soundIconOff');
    if (sOn) sOn.style.display = soundEnabled ? 'block' : 'none';
    if (sOff) sOff.style.display = soundEnabled ? 'none' : 'block';
  }

  // Expose API
  window.app = {
    handleCellClick: handleCellClick,
    editHabit: openEditModal,
    deleteHabit: deleteHabit,
    switchMonth: switchMonth,
    jumpToDay: jumpToDay
  };

  // Run on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initListeners();
    renderAll();
  });

})();
