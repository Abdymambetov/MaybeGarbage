import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";
export const postUser = createAsyncThunk(
    'postUser',
    async(param, {dispatch})=> {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(param))
        const data = await response.data
        localStorage.setItem('user',JSON.stringify(param))
        localStorage.setItem('lox', JSON.stringify({token:{
            access:'jfadsjkfdsjfdjsasfjhkjfdsahjkfbahdsakjhasfhjdasnkfjhdjasfhijjdasjfnjdasfjkdhsjfhshhnadfsjjfhhsdfjfhkjashfkjnasdjhfuh',
            refresh:'dfkdfsjadjsfnjkdsfjajsnfjknasfndkjasnjfnadhbfyhurevu nhjdvbfwejcdnkjdfvisnmchjlrehnjajfij'
        }}))
    }
);

export const getCards = createAsyncThunk(
    'getCards',
    async function (info,{dispatch,rejectWithValue}){
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=32&`)
        const post = await response.json()
        dispatch(postInfo(post))
    }
)

// export const sendForm=(form)=>{
   
//     const formData= new FormData(form)
   
//     const obj = {}
//     formData.forEach((item,id)=>{
//         obj[id]=item
//     })

//     return async(dispatch)=>{
//         try{
//             const response = axios({
//                 method:'POST',
//                 url:'https://jsonplaceholder.typicode.com/users',
//                 headers:{'Content-type':'application/json'},
//                 data:JSON.stringify(obj)
//             })
//             const data = await response
//             if(data.status>=200 && data.status<400){
//                 dispatch((data.data))
//             }else{
//                 alert('try again')
//                 throw Error('something is invalid')
              
//             }
//         }catch(e){
//             alert(e)
//         }
//     }
// }

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        modal: false,
        logInUser: JSON.parse(localStorage.getItem('lox'))?.token ? true : false,
        users: {},
        items:[]
    }, 
    reducers: {
        setModal: (state, action) => {
            state.modal = !state.modal
        },
        closeModal: (state, action) => {
            console.log('hi');
            state.modal = false
        },
        headerOpen: (state, action) => {
            state.logInUser =true
        },
        notHeader: (state, action) => {
            state.logInUser = false
            localStorage.removeItem('token')
        },
        postInfo: (state, action) =>{
            state.items = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(postUser.fulfilled, (state, action) =>{
            state.users = action.payload
        })
        builder.addCase(postUser.rejected, (state, action) => {
            state.users = {}
        })
        //  builder.addCase(sendForm.fulfilled, (state, action) =>{
        //     state.users = action.payload
        // })
        // builder.addCase(sendForm.rejected, (state, action) => {
        //     state.users = {}
        // })
    }
})


export const {setModal, closeModal, headerOpen, notHeader, postInfo} =  authSlice.actions
export default authSlice.reducer