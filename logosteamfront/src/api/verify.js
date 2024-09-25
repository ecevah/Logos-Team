import axios from "./axios";

const verify = async (token) => {
    try{
        if(token===null&&token===undefined&&token===''){
            return false;
        }
        else{
            const res = await axios.get('/api/verify', {
                headers: {
                    'x-access-token': token
                }
            })
            if(res.data.status){
                localStorage.setItem('id', res.data.decoded.psychologist._id);
                localStorage.setItem('name', res.data.decoded.psychologist.name);
                localStorage.setItem('surname', res.data.decoded.psychologist.surName);
                localStorage.setItem('unvan', res.data.decoded.psychologist.unvan);
                localStorage.setItem('tag', res.data.decoded.psychologist.tag[0]);
                localStorage.setItem('img', res.data.decoded.psychologist.image);
                return true;
            }else{
                return false;
            }
        }
    }catch (err){
        return false;
    }
}

export default verify;