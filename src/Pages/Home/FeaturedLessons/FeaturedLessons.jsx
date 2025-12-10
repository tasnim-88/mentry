import React from 'react';

const FeaturedLessons = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Featured Life Lessons</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 transition-transform hover:-translate-y-1">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIKXMj0gbM9HZ8k7tZpRPTvqheP48rB4W8qIIlFe0Ktdm8IfFXWafFizmjsuzTaM8bmJGHhnlFELJXWu0nEe0jGJrjLxWAegbfvDCp2-t8D4TvG85D9gmVUQvtlzGyVFAEbry96gviWjGBc2QDySD3v35YkU4iEbU6d193epHr5G9URXJyeqYfgxG0HmEHUTlAjqBeHNfvq2TLSKhGklP1fbiNOO8ldkPj3Gida4JRLGEJcUMc62zhOCvGe2kEdoTMAspxF5zdEvI")' }}
                            ></div>
                            <div>
                                <p className=" text-base font-medium leading-normal">On Overcoming Fear</p>
                                <p className=" text-sm font-normal leading-normal">By Alex Johnson</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 transition-transform hover:-translate-y-1">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjcR-geGPQjWEWHn2taFnpE5LjfHTm7-deyLcbGUQ3rJyhMnK5tdJan74T_n3DLGbpwp5CEIGM8PYasiSG6GaDJ_dNSus3hDBGiIpmq9AO3srwOvVry4kx3OY8Mk1hz0MysFNQCGyVaoAHwBVKdhzuhWMFphieiTgv7J3gHC0GlnEywLTTbkPhObyr210TgOk7_w5Ee69LYMcssRkb1MyKw6EgodIHhnnyq-oiqxouL2sLUieW7bDNv6dxV6A-53PL41tArEcntmI")' }}
                            ></div>
                            <div>
                                <p className="font-medium leading-normal">The Power of Listening</p>
                                <p className=" text-sm font-normal leading-normal">By Maria Garcia</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 transition-transform hover:-translate-y-1">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiu4uZH-zjRtdFKSnNbCekGqS4F3ZQJgk9VJO53R64llL3feMnMWG6BovgH8cxCswqMfjQAdXQ_5-3SakhdPX-oScqGitnfY0nZHhgX3INith9U9Yh2PQwSxeTb8JIl81w5CHVi7xnPqzPrSYWo3Mm2wkb_7Lsf511Xzm8cpaHZ-FKuPIxgHbqlfPVXgA1vXSbEAgt8yVe6b6mh4a2HpDuyt-uvlGqTNyQ08YEf6TbDr4VKCvGn0VDlb1kXY97H1y67zvM5wW5xY0")' }}
                            ></div>
                            <div>
                                <p className=" text-base font-medium leading-normal">Finding Joy in Simplicity</p>
                                <p className=" text-sm font-normal leading-normal">By Chen Wei</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 transition-transform hover:-translate-y-1">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEsw1IUFISNl6I-YxOj-rJwhnu6Td9HXru5sL0VpKbR4l9XXKjueVUD1l9kAgqofjQt-0q4YlJgFAZIYu0Mj1MTNdqeYRXXlPJXwMiIgx4MqqwqjjamhQe2BO6-VbtxtNP0SfXUh18FrKFFWX8p-rbjSJvgqbE0tkadEK9qUWbwctFx8sTrmPJATg-wMDMmfKXl651nAQ5Zf7pDCtVyAfH29K3ky-iZSBZWpkQofLTVBuhJSXpPmoLB6C4MDVS7ErKnyBCZpYrgcc")' }}
                            ></div>
                            <div>
                                <p className=" text-base font-medium leading-normal">The Art of Forgiveness</p>
                                <p className=" text-sm font-normal leading-normal">By Samira Khan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedLessons;