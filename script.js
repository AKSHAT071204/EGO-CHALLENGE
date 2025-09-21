// EGO CHALLENGE - Integrated Application
class EgoChallengeApp {
    constructor() {
        this.quotes = [
            "Discipline is the bridge between goals and accomplishment.",
            "The only impossible journey is the one you never begin.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "The way to get started is to quit talking and begin doing.",
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "It is during our darkest moments that we must focus to see the light.",
            "The only way to do great work is to love what you do.",
            "Success is walking from failure to failure with no loss of enthusiasm.",
            "The harder you work for something, the greater you'll feel when you achieve it.",
            "Believe you can and you're halfway there.",
            "The only person you are destined to become is the person you decide to be.",
            "Your limitation—it's only your imagination.",
            "Great things never come from comfort zones.",
            "Dream it. Wish it. Do it.",
            "Success doesn't just find you. You have to go out and get it.",
            "The harder you work for something, the greater you'll feel when you achieve it.",
            "Dream bigger. Do bigger.",
            "Don't stop when you're tired. Stop when you're done.",
            "Wake up with determination. Go to bed with satisfaction."
        ];
        
        this.currentQuote = '';
        this.speechSynthesis = window.speechSynthesis;
        
        // Habit tracker data
        this.habitData = [
            {
                "day": 1,
                "title": "Stabilize Routine - Day 1",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Write full timetable and aim for 50–70% adherence",
                "adsRequired": 0
            },
            {
                "day": 2,
                "title": "Stabilize Routine - Day 2",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add 3-min meditation pre-deep-work",
                "adsRequired": 0
            },
            {
                "day": 3,
                "title": "Stabilize Routine - Day 3",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add 20-min post-lunch walk as low-stimulation break",
                "adsRequired": 0
            },
            {
                "day": 4,
                "title": "Stabilize Routine - Day 4",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add 25-min skill block (writing/English/interview practice)",
                "adsRequired": 1
            },
            {
                "day": 5,
                "title": "Stabilize Routine - Day 5",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Enable distraction blockers for deep-work hours",
                "adsRequired": 1
            },
            {
                "day": 6,
                "title": "Stabilize Routine - Day 6",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Eat only one-ingredient meals until 6 PM",
                "adsRequired": 1
            },
            {
                "day": 7,
                "title": "Weekly Review - Day 7",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "60 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Do 15-min weekly review: wins, slips, tweaks",
                "adsRequired": 1
            },
            {
                "day": 8,
                "title": "Progressive Overload - Day 8",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add +10 min deep work (or 1 Pomodoro)",
                "adsRequired": 1
            },
            {
                "day": 9,
                "title": "Progressive Overload - Day 9",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Increase meditation to 5 min + 1 no-phone morning hour",
                "adsRequired": 1
            },
            {
                "day": 10,
                "title": "Progressive Overload - Day 10",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add a second 20-min walk later in day",
                "adsRequired": 1
            },
            {
                "day": 11,
                "title": "Progressive Overload - Day 11",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "Strength session with logged sets/reps",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Track sets/reps in notes",
                "adsRequired": 1
            },
            {
                "day": 12,
                "title": "Progressive Overload - Day 12",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "Strength or 20-min walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "20-min focused reading post-lunch + annotate 3 insights",
                "adsRequired": 1
            },
            {
                "day": 13,
                "title": "Progressive Overload - Day 13",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "Strength or 20-min walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "24-hr lite detox: no short-form, no junk, minimal screens",
                "adsRequired": 1
            },
            {
                "day": 14,
                "title": "Weekly Review - Day 14",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "70 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM + weekly review",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Pre-write next week's template",
                "adsRequired": 1
            },
            {
                "day": 15,
                "title": "Refine Environment - Day 15",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Create morning ritual: desk setup + start cue",
                "adsRequired": 1
            },
            {
                "day": 16,
                "title": "Refine Environment - Day 16",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Remove one more instant-gratification trigger",
                "adsRequired": 1
            },
            {
                "day": 17,
                "title": "Refine Environment - Day 17",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "10-min evening tidy + lay out clothes for tomorrow",
                "adsRequired": 1
            },
            {
                "day": 18,
                "title": "Refine Environment - Day 18",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add 30-min deep-work booster in 2nd half of day",
                "adsRequired": 1
            },
            {
                "day": 19,
                "title": "Refine Environment - Day 19",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Prep default breakfast & lunch for next 3 days",
                "adsRequired": 1
            },
            {
                "day": 20,
                "title": "Refine Environment - Day 20",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Send daily plan or result to accountability partner",
                "adsRequired": 1
            },
            {
                "day": 21,
                "title": "Weekly Review - Day 21",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "80 min deep work before social media",
                    "2x 20-min walks or strength + walk mix",
                    "Journal AM/PM + weekly review",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Write 1-page lessons learned summary",
                "adsRequired": 2
            },
            {
                "day": 22,
                "title": "Performance & Resilience - Day 22",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "20 min walk or strength training",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add +10 min deep work (keep cues & blockers)",
                "adsRequired": 2
            },
            {
                "day": 23,
                "title": "Performance & Resilience - Day 23",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "Strength session with +10% volume",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Slightly increase training volume",
                "adsRequired": 2
            },
            {
                "day": 24,
                "title": "Performance & Resilience - Day 24",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "Strength or walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "15-min speaking/interview drill (record & review)",
                "adsRequired": 2
            },
            {
                "day": 25,
                "title": "Performance & Resilience - Day 25",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "Strength or walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Strict morning detox block: no phone until deep work done",
                "adsRequired": 2
            },
            {
                "day": 26,
                "title": "Performance & Resilience - Day 26",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "Strength or walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Add 20-min reading wind-down (devices off 60 min pre-sleep)",
                "adsRequired": 2
            },
            {
                "day": 27,
                "title": "Performance & Resilience - Day 27",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "Strength or walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Run 2-hr monk-mode sprint: single task, door closed",
                "adsRequired": 2
            },
            {
                "day": 28,
                "title": "Weekly Review - Day 28",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "Strength or walk",
                    "Journal AM/PM + weekly review",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Schedule next month's default timetable as calendar blocks",
                "adsRequired": 2
            },
            {
                "day": 29,
                "title": "Consolidation - Day 29",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "30 min training/walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Full practice day: hit all minimums",
                "adsRequired": 2
            },
            {
                "day": 30,
                "title": "Consolidation - Day 30",
                "coreHabits": [
                    "Plan tomorrow tonight (hour-by-hour)",
                    "90 min deep work before social media",
                    "30 min training/walk",
                    "Journal AM/PM",
                    "Follow detox window rules",
                    "Sleep in fixed window"
                ],
                "upgradeHabit": "Write future-self letter, update blockers, lock routine",
                "adsRequired": 2
            }
        ];

        this.currentDay = 1;
        this.progress = this.loadProgress();
        this.isLoggedIn = this.checkLoginStatus();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        
        if (this.isLoggedIn) {
            this.showHabitTracker();
        } else {
            this.showLandingPage();
        }
    }

    setupEventListeners() {
        // Landing page events
        const enterBtn = document.getElementById('enterBtn');
        if (enterBtn) {
            enterBtn.addEventListener('click', () => {
                this.showLoginModal();
            });
        }

        const speakBtn = document.getElementById('speakBtn');
        if (speakBtn) {
            speakBtn.addEventListener('click', () => {
                this.speakQuote();
            });
        }

        // Modal events
        const closeModal = document.getElementById('closeModal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                this.hideLoginModal();
            });
        }

        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideLoginModal();
                }
            });
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission();
            });
        }

        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', () => {
                this.validateEmail();
            });
        }

        // Habit tracker events
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
            });
        }

        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Day navigation
        const prevDay = document.getElementById('prevDay');
        if (prevDay) {
            prevDay.addEventListener('click', () => {
                if (this.currentDay > 1) {
                    this.currentDay--;
                    this.renderCurrentDay();
                    this.updateProgress();
                }
            });
        }

        const nextDay = document.getElementById('nextDay');
        if (nextDay) {
            nextDay.addEventListener('click', () => {
                if (this.currentDay < 30) {
                    this.currentDay++;
                    this.renderCurrentDay();
                    this.updateProgress();
                }
            });
        }

        // Day actions
        const completeDay = document.getElementById('completeDay');
        if (completeDay) {
            completeDay.addEventListener('click', () => {
                this.showConfirmationModal();
            });
        }

        const resetDay = document.getElementById('resetDay');
        if (resetDay) {
            resetDay.addEventListener('click', () => {
                this.resetCurrentDay();
            });
        }

        // Modal actions
        const confirmComplete = document.getElementById('confirmComplete');
        if (confirmComplete) {
            confirmComplete.addEventListener('click', () => {
                this.completeCurrentDay();
                this.hideConfirmationModal();
            });
        }

        const cancelComplete = document.getElementById('cancelComplete');
        if (cancelComplete) {
            cancelComplete.addEventListener('click', () => {
                this.hideConfirmationModal();
            });
        }

        // Close modal on background click
        const confirmationModal = document.getElementById('confirmationModal');
        if (confirmationModal) {
            confirmationModal.addEventListener('click', (e) => {
                if (e.target.id === 'confirmationModal') {
                    this.hideConfirmationModal();
                }
            });
        }
    }

    // Landing page methods
    showLandingPage() {
        document.getElementById('challengePage').style.display = 'flex';
        document.getElementById('habitTrackerApp').style.display = 'none';
        this.loadRandomQuote();
        this.startTimedReveals();
    }

    showHabitTracker() {
        document.getElementById('challengePage').style.display = 'none';
        document.getElementById('habitTrackerApp').style.display = 'block';
        this.renderCurrentDay();
        this.updateProgress();
        this.renderCalendar();
        this.updateStats();
    }

    loadRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.currentQuote = this.quotes[randomIndex];
        const quoteElement = document.getElementById('randomQuote');
        if (quoteElement) {
            quoteElement.textContent = this.currentQuote;
        }
    }

    speakQuote() {
        if (this.speechSynthesis.speaking) {
            this.speechSynthesis.cancel();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(this.currentQuote);
        
        const voices = this.speechSynthesis.getVoices();
        const maleVoice = voices.find(voice => 
            voice.lang.startsWith('en') && 
            (voice.name.toLowerCase().includes('male') || 
             voice.name.toLowerCase().includes('david') ||
             voice.name.toLowerCase().includes('alex') ||
             voice.name.toLowerCase().includes('daniel'))
        );
        
        if (maleVoice) {
            utterance.voice = maleVoice;
        }
        
        utterance.rate = 0.8;
        utterance.pitch = 0.7;
        utterance.volume = 0.9;
        
        utterance.onstart = () => {
            const speakBtn = document.getElementById('speakBtn');
            if (speakBtn) {
                speakBtn.style.background = 'rgba(255, 68, 68, 0.3)';
            }
        };
        
        utterance.onend = () => {
            const speakBtn = document.getElementById('speakBtn');
            if (speakBtn) {
                speakBtn.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        };
        
        this.speechSynthesis.speak(utterance);
    }

    startTimedReveals() {
        setTimeout(() => {
            const warningText = document.getElementById('warningText');
            if (warningText) {
                warningText.classList.add('show');
            }
        }, 3000);

        setTimeout(() => {
            const enterBtn = document.getElementById('enterBtn');
            if (enterBtn) {
                enterBtn.classList.add('show');
            }
        }, 6000);
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                const emailInput = document.getElementById('email');
                if (emailInput) {
                    emailInput.focus();
                }
            }, 100);
        }
    }

    hideLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
            
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.reset();
            }
            this.clearErrors();
        }
    }

    validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (!emailInput || !emailError) return true;
        
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.classList.add('show');
            emailInput.style.borderColor = '#ff4444';
            return false;
        } else {
            emailError.classList.remove('show');
            emailInput.style.borderColor = '#444444';
            return true;
        }
    }

    clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.classList.remove('show');
        });
        
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.borderColor = '#444444';
        });
    }

    handleFormSubmission() {
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        
        if (!emailInput || !phoneInput) return;
        
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        
        if (!this.validateEmail()) {
            return;
        }
        
        if (!email) {
            const emailError = document.getElementById('emailError');
            if (emailError) {
                emailError.textContent = 'Email address is required';
                emailError.classList.add('show');
                emailInput.style.borderColor = '#ff4444';
            }
            return;
        }
        
        this.showSuccessToast();
        this.hideLoginModal();
        
        const userData = {
            email: email,
            phone: phone || null,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('egoChallenge_user', JSON.stringify(userData));
        localStorage.setItem('egoChallenge_loggedIn', 'true');
        
        setTimeout(() => {
            this.isLoggedIn = true;
            this.showHabitTracker();
        }, 2000);
    }

    showSuccessToast() {
        const toast = document.getElementById('successToast');
        if (toast) {
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }
    }

    checkLoginStatus() {
        return localStorage.getItem('egoChallenge_loggedIn') === 'true';
    }

    logout() {
        localStorage.removeItem('egoChallenge_loggedIn');
        this.isLoggedIn = false;
        this.showLandingPage();
    }

    // Habit tracker methods
    switchTab(tabName) {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(`${tabName}-tab`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        if (tabName === 'progress') {
            this.updateStats();
        } else if (tabName === 'calendar') {
            this.renderCalendar();
        }
    }

    renderCurrentDay() {
        const dayData = this.habitData[this.currentDay - 1];
        if (!dayData) return;
        
        const dayTitle = document.getElementById('dayTitle');
        const dayNumber = document.getElementById('dayNumber');
        const currentDay = document.getElementById('currentDay');
        
        if (dayTitle) dayTitle.textContent = dayData.title;
        if (dayNumber) dayNumber.textContent = this.currentDay;
        if (currentDay) currentDay.textContent = this.currentDay;

        const prevDay = document.getElementById('prevDay');
        const nextDay = document.getElementById('nextDay');
        
        if (prevDay) prevDay.disabled = this.currentDay === 1;
        if (nextDay) nextDay.disabled = this.currentDay === 30;

        this.renderCoreHabits(dayData.coreHabits);
        this.renderUpgradeHabit(dayData.upgradeHabit);
        this.renderAdsSection(dayData.adsRequired);
        this.updateDayCompletionStatus();
    }

    renderCoreHabits(habits) {
        const container = document.getElementById('coreHabits');
        if (!container) return;
        
        container.innerHTML = '';

        habits.forEach((habit, index) => {
            const habitElement = document.createElement('div');
            habitElement.className = 'habit-item';
            habitElement.dataset.habitIndex = index;

            const isCompleted = this.progress[this.currentDay]?.coreHabits?.[index] || false;
            if (isCompleted) {
                habitElement.classList.add('completed');
            }

            habitElement.innerHTML = `
                <span class="habit-text">${habit}</span>
                <div class="habit-checkbox">
                    ${isCompleted ? '<i class="fas fa-check"></i>' : ''}
                </div>
            `;

            habitElement.addEventListener('click', () => {
                this.toggleHabit(index);
            });

            container.appendChild(habitElement);
        });
    }

    renderUpgradeHabit(upgradeHabit) {
        const container = document.getElementById('upgradeHabit');
        if (!container) return;
        
        const isCompleted = this.progress[this.currentDay]?.upgradeHabit || false;
        
        container.innerHTML = `
            <div class="upgrade-habit ${isCompleted ? 'completed' : ''}" id="upgradeHabitItem">
                <span class="habit-text">${upgradeHabit}</span>
                <div class="habit-checkbox">
                    ${isCompleted ? '<i class="fas fa-check"></i>' : ''}
                </div>
            </div>
        `;

        const upgradeItem = document.getElementById('upgradeHabitItem');
        if (upgradeItem) {
            upgradeItem.addEventListener('click', () => {
                this.toggleUpgradeHabit();
            });
        }
    }

    renderAdsSection(adsRequired) {
        const container = document.getElementById('adsSection');
        const countElement = document.getElementById('adsCount');
        
        if (!container || !countElement) return;
        
        if (adsRequired > 0) {
            container.style.display = 'block';
            countElement.textContent = adsRequired;
        } else {
            container.style.display = 'none';
        }
    }

    toggleHabit(habitIndex) {
        if (!this.progress[this.currentDay]) {
            this.progress[this.currentDay] = {
                coreHabits: [],
                upgradeHabit: false,
                completed: false
            };
        }

        if (!this.progress[this.currentDay].coreHabits) {
            this.progress[this.currentDay].coreHabits = [];
        }

        this.progress[this.currentDay].coreHabits[habitIndex] = 
            !this.progress[this.currentDay].coreHabits[habitIndex];

        this.saveProgress();
        this.renderCurrentDay();
        this.updateProgress();
    }

    toggleUpgradeHabit() {
        if (!this.progress[this.currentDay]) {
            this.progress[this.currentDay] = {
                coreHabits: [],
                upgradeHabit: false,
                completed: false
            };
        }

        this.progress[this.currentDay].upgradeHabit = 
            !this.progress[this.currentDay].upgradeHabit;

        this.saveProgress();
        this.renderCurrentDay();
        this.updateProgress();
    }

    updateDayCompletionStatus() {
        const dayProgress = this.progress[this.currentDay];
        const isCompleted = dayProgress?.completed || false;
        
        const completeBtn = document.getElementById('completeDay');
        if (!completeBtn) return;
        
        if (isCompleted) {
            completeBtn.innerHTML = '<i class="fas fa-check"></i> Day Completed';
            completeBtn.classList.add('completed');
            completeBtn.disabled = true;
        } else {
            completeBtn.innerHTML = '<i class="fas fa-check"></i> Complete Day';
            completeBtn.classList.remove('completed');
            completeBtn.disabled = false;
        }
    }

    showConfirmationModal() {
        const modal = document.getElementById('confirmationModal');
        if (modal) {
            modal.classList.add('show');
        }
    }

    hideConfirmationModal() {
        const modal = document.getElementById('confirmationModal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    completeCurrentDay() {
        if (!this.progress[this.currentDay]) {
            this.progress[this.currentDay] = {
                coreHabits: [],
                upgradeHabit: false,
                completed: false
            };
        }

        this.progress[this.currentDay].completed = true;
        this.saveProgress();
        this.renderCurrentDay();
        this.updateProgress();
        this.updateStats();
    }

    resetCurrentDay() {
        if (this.progress[this.currentDay]) {
            this.progress[this.currentDay] = {
                coreHabits: [],
                upgradeHabit: false,
                completed: false
            };
            this.saveProgress();
            this.renderCurrentDay();
            this.updateProgress();
            this.updateStats();
        }
    }

    updateProgress() {
        const totalDays = 30;
        const completedDays = Object.values(this.progress).filter(day => day.completed).length;
        const progressPercentage = Math.round((completedDays / totalDays) * 100);

        const progressFill = document.getElementById('overallProgress');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        if (progressText) {
            progressText.textContent = `${progressPercentage}%`;
        }
    }

    updateStats() {
        const completedDays = Object.values(this.progress).filter(day => day.completed).length;
        const totalHabits = Object.values(this.progress).reduce((total, day) => {
            if (day.coreHabits) {
                total += day.coreHabits.filter(habit => habit).length;
            }
            if (day.upgradeHabit) total += 1;
            return total;
        }, 0);

        const totalPossibleHabits = 30 * 7;
        const completionRate = totalPossibleHabits > 0 ? Math.round((totalHabits / totalPossibleHabits) * 100) : 0;

        let streak = 0;
        for (let i = 1; i <= 30; i++) {
            if (this.progress[i]?.completed) {
                streak++;
            } else {
                break;
            }
        }

        const streakCount = document.getElementById('streakCount');
        const completedHabits = document.getElementById('completedHabits');
        const completionRateEl = document.getElementById('completionRate');
        const daysCompleted = document.getElementById('daysCompleted');
        
        if (streakCount) streakCount.textContent = streak;
        if (completedHabits) completedHabits.textContent = totalHabits;
        if (completionRateEl) completionRateEl.textContent = `${completionRate}%`;
        if (daysCompleted) daysCompleted.textContent = completedDays;
    }

    renderCalendar() {
        const container = document.getElementById('calendarGrid');
        if (!container) return;
        
        container.innerHTML = '';

        this.habitData.forEach(dayData => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            const dayProgress = this.progress[dayData.day];
            let statusClass = 'not-started';
            
            if (dayProgress?.completed) {
                statusClass = 'completed';
            } else if (dayProgress && (dayProgress.coreHabits?.some(h => h) || dayProgress.upgradeHabit)) {
                statusClass = 'partial';
            }

            dayElement.classList.add(statusClass);

            const completedHabits = dayProgress?.coreHabits?.filter(h => h).length || 0;
            const totalHabits = dayData.coreHabits.length + 1;

            dayElement.innerHTML = `
                <div class="day-title">Day ${dayData.day}: ${dayData.title}</div>
                <div class="day-habits">${completedHabits}/${totalHabits} habits completed</div>
                <div class="day-upgrade">${dayData.upgradeHabit}</div>
            `;

            dayElement.addEventListener('click', () => {
                this.currentDay = dayData.day;
                this.switchTab('today');
                this.renderCurrentDay();
                this.updateProgress();
            });

            container.appendChild(dayElement);
        });
    }

    saveProgress() {
        localStorage.setItem('egoChallenge_progress', JSON.stringify(this.progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('egoChallenge_progress');
        return saved ? JSON.parse(saved) : {};
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EgoChallengeApp();
    
    // Register Service Worker for PWA functionality
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    }
});

// Handle page visibility changes to pause/resume speech
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
    } else if (!document.hidden && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    }
});

// Handle beforeunload to clean up speech synthesis
window.addEventListener('beforeunload', () => {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
});