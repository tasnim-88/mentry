import React from 'react';

const TopContributors = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Top Contributors of the Week</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 dark:bg-white/5">
                            <img className="size-20 rounded-full object-cover mb-3" data-alt="Portrait of Sarah Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbLaMgDj6JLwdyBBVTURo-d4iHeSLJJ4PHw7C4izv1_J3yTJ-67ryCAJx3_GWD7xu3AIGvaZeAlL2cM2OQY-CB7YpbKeC3yE8DtXJEejHXlFOpk2YbXLVUKYkb8aMcLyga2PYk5eAmZJN6yLW9zNuMzKL9K29MvEXmZdd_DAchD0GfbzZ0ANHT37pnSDj6olpnyREw3b-j5zSKkurdWqc1peRlfTwJNa7ReHSWpkaY4r4gG_ljUw3XBQZ8zdZ8m7ax8rzvxVlLmco" />
                            <p className="font-bold text-gray-900 dark:text-white">Sarah Chen</p>
                            <p className="text-sm text-primary font-medium">15 Lessons Shared</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 dark:bg-white/5">
                            <img className="size-20 rounded-full object-cover mb-3" data-alt="Portrait of Michael B." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmiEY-0Cq92TgLGYzN_dNTB8eg7SxZ9aPn7Ma5znCD8Aq37cEXODY9XfXHn7vQBATnXpQ-1pLrSXLVT8eEnYX2VFdRiCzOk_WVbpsz_9W7bS5-dfSQd4o87-PWmOivhOlUrRbVaQByHt-EkZrMebfz5vfpgIPAx6D3eZ-p75Eol5ZseGnROS_47tbfFyWgYH_v-hTdEukDvYw36TT3_1CJY_x1YXvDAT-iHiKNNt8y8mgFgfw_d9v7aEk4PaE1IC9dSTXPQOwXHWE" />
                            <p className="font-bold text-gray-900 dark:text-white">Michael B.</p>
                            <p className="text-sm text-primary font-medium">12 Lessons Shared</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 dark:bg-white/5">
                            <img className="size-20 rounded-full object-cover mb-3" data-alt="Portrait of Emily Carter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHP1nzdmfuylBk9EPMqhCFZqmDHfghpPMVvfMb45TQkL8uI5wtbqhJrur0nNsW8nFEOmyvV7QfgdUFFzqGnMr_A1lFgJhbNIG55AS2TnZBqX4SADpa8plEiQbLmj4tw7FgfpHZncbmidScRBJKexpam48LkbT3FTAf0zBH1Hs9yMFO8lUyfqIezLXr7aNk4nBt3LPJpbKg-X9gRBomy40mrctDNedlGgtuMy1bx72mwHuvM7ylD6QD9OZg1Fmql7I9gArLN8t432s" />
                            <p className="font-bold text-gray-900 dark:text-white">Emily Carter</p>
                            <p className="text-sm text-primary font-medium">11 Lessons Shared</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 dark:bg-white/5">
                            <img className="size-20 rounded-full object-cover mb-3" data-alt="Portrait of David Rodriguez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2iwM_IZHxa_PMOXWIut9y29Gg9yrFa4gFIe_jVUsq4E4NcavjfpHex8jQ33ERW-5RtpdaPmkUoMe87MUkdv7q9s99DoaLoWrZPGUDwSrHgGgdVmw66oUAKtbs2g77-IYZMUwCHXyct-5aCwbCgh6QvGW-lwoCAHP-ufBiPotbnyBoEP7WF86dHFfqmp0-SUZ1WDCjpPWk75SK_QJkdL3SHFFsisMFhhIfoWrIaKFddEgBNOMrjErXVV_Z--q2FrHwmRzRo0T9u-Y" />
                            <p className="font-bold text-gray-900 dark:text-white">David Rodriguez</p>
                            <p className="text-sm text-primary font-medium">9 Lessons Shared</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 dark:bg-white/5">
                            <img className="size-20 rounded-full object-cover mb-3" data-alt="Portrait of Aisha Khan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbrlxzR5M6uJcDDOEUoJCLhSreGLOTNE3OLY365hT5Y3rgKKgewy-HG31DWVG6xhiGMl2xTriPNlvm3Bm0_pk6_ozC1bqqyU0rJmn7iLJnHoJt2ppifqXJZzJPtg4azm2_2h_o9D3cbBW4q3T-0w_YjbJxNd69cR5H0k80n9_FnvulVmQL7mruKCnS8uXwEijqlGl-B5eJejlARKkhkymkeyiywRyOj4qkfu-IuaBTIBplblJgzI07CYd0gK86lA86R-DepqTZpfg" />
                            <p className="font-bold text-gray-900 dark:text-white">Aisha Khan</p>
                            <p className="text-sm text-primary font-medium">8 Lessons Shared</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 dark:bg-white/5">
                            <img className="size-20 rounded-full object-cover mb-3" data-alt="Portrait of Tom Iwata" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGmtQPXE7LCWlX8mgd9rbLRX-Wp3WdyTtMx13VIlgltrCX7u1v3RGz1wO2iEvpNhX3ksMzH4ysJtGci8c5NapbonwvgLY3R6VxOAOuuE5yJCK820IuRZzbkiZ6EyBVgO76mv_0WRJbtd7iReB5bseFvPUXGwT2az3G6x72Hnl4pFELcCoNcP2EshPRLvLlqPjfxezcc4GBFcTmXyYXY-KBky9RJ8fLnEqdto_Hg2F-soNODlzYRJ3L7B2i0INCimCsUj-McfXlzIc" />
                            <p className="font-bold text-gray-900 dark:text-white">Tom Iwata</p>
                            <p className="text-sm text-primary font-medium">7 Lessons Shared</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopContributors;