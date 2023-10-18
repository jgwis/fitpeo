import { createContext, useContext, useEffect, useRef, useState } from "react";
export const HeaderContext = createContext();
export const useHeader = () => {
    return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const leftPanelRef = useRef(null);
    const toggleSidebar = () => {
        setIsActiveSidebar(!isActiveSidebar);
        setOverlayVisible(!isOverlayVisible);
    }

    const handleClickOutside = () => {
        if (leftPanelRef.current == null) {
            setIsActiveSidebar(false);
            setOverlayVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isActiveSidebar, isOverlayVisible]);

    return (
        <HeaderContext.Provider value={{ isActiveSidebar, toggleSidebar, isOverlayVisible }}>
            {children}
        </HeaderContext.Provider>
    )
}

