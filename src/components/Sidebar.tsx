import Search from "./subcomponents/Search"

export default function Sidebar() {
    return (
        <div className="w-[280px] h-[1070px] bg-white border-r-2 border-black flex-col justify-start items-center inline-flex">
            <Search />
            <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
                <div className="h-[121px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Introduction</div>
                    </div>
                    <div className="h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[82px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Company Overview</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[133px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Core Values</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[114px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Lead Members</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[118px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Achievements</div>
                        </div>
                    </div>
                </div>
                <div className="h-[97px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Projects</div>
                    </div>
                    <div className="h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[159px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">TextMRI</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[46px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Expository Data Analysis</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[175px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Gloria</div>
                        </div>
                    </div>
                </div>
                <div className="h-[121px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">API Keys</div>
                    </div>
                    <div className="h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[166px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">NextJS</div>
                        </div>
                        <div className="w-[215px] h-5 pr-48 rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">CLI</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[127px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Server Hosts</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[173px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Figma</div>
                        </div>
                    </div>
                </div>
                <div className="h-[73px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Authentication</div>
                    </div>
                    <div className="h-11 flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[172px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Auth0</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[50px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Google Identity Platform</div>
                        </div>
                    </div>
                </div>
                <div className="h-[121px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Accounts</div>
                    </div>
                    <div className="h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[157px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Creation</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[113px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Account Types</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[125px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Management</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[158px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Security</div>
                        </div>
                    </div>
                </div>
                <div className="h-[121px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Metadata</div>
                    </div>
                    <div className="h-[92px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[150px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Overview</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[105px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Metadata Types</div>
                        </div>
                        <div className="w-[215px] h-5 pr-12 rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Standards and Protocols</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[140px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Integration</div>
                        </div>
                    </div>
                </div>
                <div className="h-[97px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Maintenance</div>
                    </div>
                    <div className="h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[127px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Data Upkeep</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[127px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Service Logs</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[99px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Scheduled Tasks</div>
                        </div>
                    </div>
                </div>
                <div className="h-[73px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Version History</div>
                    </div>
                    <div className="h-11 flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[141px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Changelog</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[119px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Archived Files</div>
                        </div>
                    </div>
                </div>
                <div className="h-[97px] bg-white flex-col justify-start items-center gap-[5px] flex">
                    <div className="self-stretch h-6 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#101828] text-base font-semibold font-['Inter'] leading-normal">Webhooks</div>
                    </div>
                    <div className="h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="w-[215px] h-5 pr-[54px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Webhook Configuration</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[110px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Event Listeners</div>
                        </div>
                        <div className="w-[215px] h-5 pr-[145px] rounded-lg justify-start items-center inline-flex">
                            <div className="text-[#6840c6] text-sm font-semibold leading-tight">Error Logs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}