import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 dark:bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Digital Life Lessons</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Preserving wisdom, fostering growth.</p>
                            <div className="flex gap-4 mt-4">
                                <a className="text-gray-500 hover:text-primary" href="#">
                                    <BsTwitterX size={24}/> </a>
                                <a className="text-gray-500 hover:text-primary" href="#">
                                    <FaFacebook size={24}/> </a>
                                <a className="text-gray-500 hover:text-primary" href="#">
                                    <BsInstagram size={24}/> </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Product</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Pricing</a></li>
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Features</a></li>
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Updates</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Company</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">About Us</a></li>
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Contact</a></li>
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Legal</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Terms of Service</a></li>
                                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>© 2025 Digital Life Lessons. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;