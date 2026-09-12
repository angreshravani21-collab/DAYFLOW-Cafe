export type TaskStatus = 'todo' | 'doing' | 'done';
export type Task = {
  id: number;
  title: string;
  detail: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  tag: string;
};
export type JournalEntry = {
  id: number;
  date: string;
  mood: number;
  prompt: string;
  text: string;
};
export type Achievement = {
  icon: string;
  title: string;
  detail: string;
  color: 'rose' | 'sage' | 'lavender' | 'peach';
};

/**
 * Optional demo fixture. Fresh sessions intentionally do not use this data.
 * Set DEMO_MODE to true when you want to preview the fully populated café.
 */
export const DEMO_MODE = false;

export const demoData = {
  profile: {
    name: 'Alex Lee',
    email: 'alex@dayflow.cafe',
    initials: 'AL',
  },
  tasks: [
    { id: 1, title: 'Review launch notes', detail: 'Tighten the final handoff for Friday.', status: 'doing', priority: 'high', tag: 'Deep work' },
    { id: 2, title: 'Book dentist appointment', detail: 'Find a morning slot next week.', status: 'todo', priority: 'medium', tag: 'Life admin' },
    { id: 3, title: 'Reply to Maya', detail: 'Send the moodboard + your thoughts.', status: 'todo', priority: 'low', tag: 'People' },
    { id: 4, title: 'Ship portfolio refresh', detail: 'A tiny victory from yesterday.', status: 'done', priority: 'high', tag: 'Milestone' },
    { id: 5, title: 'Read design systems chapter', detail: 'Pages 84–112, with a good drink.', status: 'done', priority: 'low', tag: 'Learning' },
    { id: 6, title: 'Plan Friday retro', detail: 'Three prompts, no deck required.', status: 'todo', priority: 'medium', tag: 'Team' },
  ] satisfies Task[],
  journal: [
    { id: 1, date: 'Tuesday, October 15', mood: 5, prompt: 'What made today feel like yours?', text: 'I found a quiet pocket after lunch and made something I am genuinely proud of. The tiny rituals did their job.' },
    { id: 2, date: 'Monday, October 14', mood: 4, prompt: 'Where did your energy go?', text: 'A lot of context switching, but I kept coming back to the one thing that mattered.' },
    { id: 3, date: 'Friday, October 11', mood: 3, prompt: 'What are you carrying into the weekend?', text: 'A softer pace. And the idea that done is allowed to look a little imperfect.' },
  ] satisfies JournalEntry[],
  coins: 248,
  streak: 11,
  workday: {
    status: 'working' as const,
    punchIn: Date.parse('2024-10-16T08:42:00'),
    punchOut: null,
  },
  rhythmScore: 7.8,
  focusSessions: 2,
  analyticsFocus: [38, 52, 34, 76, 48, 69, 55],
  analytics: {
    focusTime: '8h 42m',
    tasksFinished: 24,
    daysPresent: '5/7',
    score: 82,
    completion: '76%',
  },
  attendanceStates: Array.from({ length: 30 }, (_, i) => i % 11 === 0 ? 'absent' : i % 7 === 0 ? 'partial' : i > 26 ? 'none' : 'present'),
  achievements: [
    { icon: '✦', title: 'First Sip', detail: 'Complete your first focus session', color: 'rose' },
    { icon: '☼', title: 'Sunrise Regular', detail: 'Show up for 14 days in a row', color: 'sage' },
    { icon: '↗', title: 'Tiny Victories', detail: 'Complete 50 tasks', color: 'lavender' },
    { icon: '☕', title: 'Café Connoisseur', detail: 'Try 10 original orders', color: 'peach' },
    { icon: '♡', title: 'Soft Landing', detail: 'Write 7 journal entries', color: 'rose' },
    { icon: '∞', title: 'In the Zone', detail: 'Focus for 10 hours this week', color: 'sage' },
  ] satisfies Achievement[],
  drinkOrder: {
    cup: 'Tall glass',
    ice: 'A little ice',
    coffee: 'Cold brew',
    milk: 'Oat milk',
    flavor: 'Vanilla',
  },
};