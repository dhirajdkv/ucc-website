import Design from './Design.jsx';

const products = [
    { name: 'ABAP (S/4HANA)', product: 'SAP ERP' },
    { name: 'AIS on S/4HANA using GBI', product: '/customers' },
    { name: 'BW/4 HANA 2.0', product: 'SAP HANA' },
    { name: 'Epistemy Press BP Configuration (S/4HANA)', product: 'SAP ERP' },
    { name: 'Epistemy Press BP Integration MCC (S/4HANA)', product: 'SAP ERP' },
    { name: 'FIORI ONLY - Intro Using Global Bike 4.1 (S/4HANA)', product: '' },
    { name: 'Fitter Snacker - Configuration (S/4HANA)', product: '' },
    { name: 'Fitter Snacker - Overview (S/4HANA)', product: 'SAP ERP' },
    { name: 'HANA - 1.0 SPS12 Database', product: 'SAP HANA' },
    { name: 'HEC ERPsim Game (S/4HANA)', product: 'SAP ERP' },
    { name: 'Intro Using Global Bike 3.3 (S/4HANA)', product: 'SAP ERP' },
    { name: 'Retail Best Practices', product: 'SAP for Retail' },
    { name: 'SAP Analytics Cloud - Beta', product: '' },
    { name: 'SAP Datasphere **BETA**', product: '' },
    { name: 'SAP Integrated Business Planning **BETA**', product: '' },
    { name: 'SHSU - Specify Case in Comment (S/4HANA)', product: 'SAP ERP' },
    { name: 'TS410 Certification (S/4HANA) - Requires UA Approval', product: 'SAP ERP' }
  ]

export default function Products () {
    return (
        <div>
            <Design showLeft={true}/>
        <div className="relative isolate px-6 pt-14 lg:px-8 mx-auto max-w-3xl py-32 sm:py-48 lg:py-48">
            <div className='text-center mb-6'>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Products we support
                </h2>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg border border-gray-200 rounded-lg shadow">
                <div className="py-4 px-4 bg-white">
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for products"/>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SAP Product
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.product}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Design rightBottom={true}/>
        </div>
    )
}