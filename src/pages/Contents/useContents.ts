import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContents } from '../../redux/actions/contentsActions';
import { RootState } from '../../redux/store';

const useContents = () => {
    const dispatch = useDispatch();
    const { contents: state } = useSelector((state: RootState) => ({
        contents: state.contents,
    }));

    const { contents = [], loading, next_url } = state;

    useEffect(() => {
        getContents()(dispatch);
    }, []);

    const ref = useRef<IntersectionObserver | null>(null)
    const lastItemRef = useCallback((post: HTMLElement | null) => {
        if (loading) return

        if (ref.current) ref.current.disconnect()

        ref.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting) {
                getContents(next_url)(dispatch);
            }
        })

        if (post) ref.current.observe(post)
    }, [loading])


    return {
        data: contents,
        loading,
        lastItemRef,
    };
};

export default useContents;
