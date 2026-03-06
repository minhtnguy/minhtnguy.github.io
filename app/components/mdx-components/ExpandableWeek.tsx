"use client";

import { Drawer } from "vaul";

export default function ExpandableWeek({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="my-6">
			<Drawer.Root>
				<Drawer.Trigger asChild>
					<button className="text-base hover:text-blue-800 hover:underline cursor-pointer font-medium inline-block">
						{title}
					</button>
				</Drawer.Trigger>
				<Drawer.Portal>
					<Drawer.Overlay className="fixed inset-0 z-[50] bg-black/40" />
					<Drawer.Content className="bg-white h-[95vh] flex flex-col fixed bottom-0 left-0 right-0 z-[50] outline-none rounded-t-[10px]">
						<div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mt-3" />
						<div className="overflow-y-auto flex-1 p-6 pt-2 pb-8">
							<div className="max-w-2xl mx-auto space-y-4">
								<h2 className="text-4xl font-semibold text-black my-12">
									{title}
								</h2>
								{children}
							</div>
						</div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</div>
	);
}
