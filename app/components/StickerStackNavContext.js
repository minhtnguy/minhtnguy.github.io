"use client";

import { createContext, useContext, useMemo, useState } from "react";

const StickerStackNavContext = createContext({
	isStackOpen: false,
	setIsStackOpen: () => {},
});

export function StickerStackNavProvider({ children }) {
	const [isStackOpen, setIsStackOpen] = useState(false);

	const value = useMemo(
		() => ({ isStackOpen, setIsStackOpen }),
		[isStackOpen],
	);

	return (
		<StickerStackNavContext.Provider value={value}>
			{children}
		</StickerStackNavContext.Provider>
	);
}

export function useStickerStackNav() {
	return useContext(StickerStackNavContext);
}
