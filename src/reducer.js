export const initialState = {
    user: null,
    playlists: [],
    playing:  false,
    item: null,
    // REMOVE AFTER FINISH DEVELOPING
    // token: "BQCSDkZARa2yOtDhajmDZdPaGlgD2tLGmEINZmaQMp90JXR5UnwCirPMugoR4ssddbGT9QwZlTMSUm3OoMRodj-v_Xn3yI41lQKM8i5M0aQrhoBp2Y0OafGrfEtGW8uLa_O_YBfcmIMYAxVmSFrWgnOeMdWGdjk5bRg9pxe4luuiX80w534A",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
                }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
                }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
                }

                
        default: 
            return state;
    }
}

export default reducer;