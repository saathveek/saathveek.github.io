import React from 'react';

function XpSkills() {
    return (
        <section 
            id="XpSkills" 
            className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-background">
            <div className="max-w-xl">
                <h1 className="text-6xl font-semibold text-primary mb-6">
                    Experience & Skills
                    Testing auto-deployment 4:17 6/10
                </h1>

                
            </div>
            <div className="w-96 h-[28rem]">
                <img
                    src="/PFP_Globe_Transparent.png"
                    alt="Experience and Skills"
                    className="w-full h-full object-cover rounded-xl border-primary"
                />
            </div>
        </section>
    );
}

export default XpSkills;