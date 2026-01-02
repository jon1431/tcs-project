
import React from 'react';

const SectionHeader = ({ icon, title }) => {
    return (
        <div className="flex gap-3 text-gray-500">
      <span className="opacity-80">
        {icon}
      </span>
            <h2 className="text-3xl font-bold tracking-tight">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
