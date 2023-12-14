import Design from './Design.jsx';
import boss from './img/boss.jpg';
import goodBoss from './img/good-boss.png';
import chicoState from './img/chicostate.jpg';

const people =[
    {name: 'Jon Strait', role: 'Technical Manager', email: 'jstrait@csuchico.edu',},
    {name: 'Tom Wilder', role: 'Executive Director', email: 'twilder@csuchico.edu'},
    {name: 'Neelam Bahl', role: 'Technical Staff', email: 'nbahl@csuchico.edu'},
    {name: 'Walter Louie', role: 'Technical Staff', email: 'wlouie@mail.csuchico.edu'},
    {name: 'David Landaeta', role: 'Technical Staff', email: 'dlandaeta@csuchico.edu'},
    {name: 'Liz Squire', role: 'Technical Staff', email: 'esquire@csuchico.edu'},
    {name: 'Norma Muzzall', role: 'Technical Staff', email: 'ngmuzzall@csuchico.edu'},
    {name: 'Travis Kaneshiro', role: 'Technical Staff', email: 'tmkaneshiro@csuchico.edu'},
    {name: 'Tesia Winley', role: 'Technical Staff', email: 'tmwinley@csuchico.edu'},
]

export default function About () {
    return (
        <div>
            <Design showLeft={true}/>
            <div className="relative isolate px-6 pt-14 lg:px-8 mx-auto max-w-3xl py-32 sm:py-48 lg:py-48">
                <div className='text-center mb-8'>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Our Team
                    </h2>
                </div>
                <div>
                    <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {people.map((item) => (
                            <div class="text-center text-gray-500">
                                <img class="mx-auto mb-1 w-36 h-36 rounded-full" src={boss} alt="place holder"/>
                                <h3 class="mb-1 text-lg font-bold tracking-tight text-gray-900">
                                {item.name}
                                </h3>
                                <p>{item.role}</p>
                                <a href={"mailto:" + item.email}><p>{item.email}</p></a>
                            </div>
                        ))}
                    </div>  
                </div>
                <div className='text-center mb-6 mt-16'>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Contact Us
                    </h2>
                </div>
                <div className='mx-auto max-w-3xl lg:mx-0 flex items-center justify-center gap-x-6'>
                    {/* <a href="#" className="block p-6 bg-white border 
                        border-gray-200 rounded-lg shadow hover:bg-gray-100" style={{maxWidth:"22rem"}}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            SAP Chico UCC
                        </h5>
                        <p className="font-normal text-sm text-gray-700">400 West 1st Street</p>
                        <p className="font-normal text-sm text-gray-700">Chico, CA 95929</p>
                        <h6 className="mb-0.5 text-lg font-semibold tracking-tight text-gray-900">
                            Email Contact: sapucc.admin@csuchico.edu
                        </h6>
                    </a> */}
                    <a href="#" className='border border-gray-200 rounded-lg shadow hover:bg-gray-100' style={{maxWidth:"22rem"}}>
                        <img class=" rounded-t-lg" src={chicoState} alt="Chico State" />
                        <div class="px-5 pb-5 text-center flex flex-col justify-center items-center">
                        <a href="mailto:sapucc.admin@csuchico.edu">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 mt-2 mb-2">SAP Chico UCC</h5>
                            <p className="font-normal text-md text-gray-700">400 West 1st Street</p>
                            <p className="font-normal text-md text-gray-700">Chico, CA 95929</p>
                            <h6 className="mt-1 mb-8 text-sm font-semibold tracking-tight text-gray-900">
                                Email: sapucc.admin@csuchico.edu
                            </h6>
                        </a>
                        <div class="flex items-center justify-between">
                            <a href="mailto:sapucc.admin@csuchico.edu" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Contact</a>
                        </div>
                    </div>
                    </a>
                </div>    
            </div>
            <Design rightBottom={true}/>
        </div>    
    )
}