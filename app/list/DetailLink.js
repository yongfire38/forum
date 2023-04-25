'use client';
import {useRouter, usePathname, useSearchParams, useParams} from 'next/navigation';

const DetailLink = () => {
    let router = useRouter();

    //let pathName = usePathname();
    //let searchParams = useSearchParams();
    //let params = useParams();

    //console.log(`pathName::::${pathName}`);
    //console.log(`searchParams::::${searchParams}`);
    //console.log(`params::::${JSON.stringify(params)}`);

    return (
        <>
            <button onClick={()=>{ router.push('/') }}>홈으로</button>
            <button onClick={()=>{ router.back() }}>뒤로가기</button>
            <button onClick={()=>{ router.forward() }}>앞으로 가기</button>
        </>
    )
}

export default DetailLink;