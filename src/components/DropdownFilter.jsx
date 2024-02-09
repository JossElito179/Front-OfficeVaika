
// export default DropdownFilter;
import React from 'react';

function DropdownFilter({
  align
}) {
  return (
    <div className='Dropdown'  style={{
      padding: '5px',
      }} >
    <div className="relative inline-flex">
      {/* Dropdown Catégories */}
      <div className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'}`}>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3" >Catégories</div>
        <style >
        {`
         select {
          margin: auto;
          font-size: 13px;
          width: 100%;
         }
        
        `}
        </style>
        <select className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          {/* Options de catégorie */}
          <option value="">catégorie 1</option>
          <option value="">catégorie 2</option>
          <option value="">catégorie 3</option>
          <option value="">catégorie 4</option>
          <option value="">catégorie 5</option>
          <option value="">catégorie 6</option>
          <option value="">catégorie 7</option>
          <option value="">catégorie 8</option>
          <option value="">catégorie 9</option>
        </select>
      </div>

      {/* Dropdown Date */}
      <div className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'}`}>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3">Date</div>
        <select className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          {/* Options de date */}
          <option value="0">Date de sortie voiture</option>
          <option value="1899 - 2000">1899 - 2000</option>
          <option value="2000- 2005">2000- 2005</option>
          <option value="2005- 2010">2005- 2010</option>
          <option value="2010- 2020">2010- 2020</option>
          <option value="2020- 2022">2020- 2022</option>
         
        </select>
      </div>

      {/* Dropdown Prix */}
      <div className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'}`}>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3">Prix</div>
        <select className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          {/* Options de prix */}
         
          <option value="0" place>Fourchette de prix</option>
          <option value="1 - 10 000 000">1 - 10 000 000</option>
          <option value="1 - 20 000 000">1 - 20 000 000</option>
          <option value="1 - 30 000 000">1 - 30 000 000</option>
          <option value="1 - 40 000 000">1 - 40 000 000</option>
          <option value="1 - 50 000 000">1 - 50 000 000</option>
        </select>
      </div>
    </div>
    </div>
  );
}

export default DropdownFilter;


