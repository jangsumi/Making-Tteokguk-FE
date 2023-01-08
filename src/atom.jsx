import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const IDState = atom({
    key: 'IDState',
    default: {ref:9, kakao:"kakaoID_test4", link:"kakaoID_test4"},
    effects_UNSTABLE: [persistAtom],
});
