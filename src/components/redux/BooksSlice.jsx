import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const GetBook = createAsyncThunk('Book', async()=>{
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=recommend&orderBy=newest&key=AIzaSyDzaPV0_3tk3Ji7i2IwzyJdzRLNV3Xhxus`)
        const jsonedData = await response.json()
        return jsonedData
    } catch (error) {
        console.log(error);
    }
})

export const GetPopulerBook = createAsyncThunk('aBook', async()=>{
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=popular&orderBy=newest&key=AIzaSyDzaPV0_3tk3Ji7i2IwzyJdzRLNV3Xhxus`)
        const jsonedData = await response.json()
        return jsonedData
    } catch (error) {
        console.log(error);
    }
})
export const GetNewBook = createAsyncThunk('NewBook', async()=>{
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=story&orderBy=newest&key=AIzaSyDzaPV0_3tk3Ji7i2IwzyJdzRLNV3Xhxus`)
        const jsonedData = await response.json()
        return jsonedData
    } catch (error) {
        console.log(error);
    }
})
export const GetLikeBook = createAsyncThunk('LikeBook', async()=>{
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=popular&orderBy=newest&key=AIzaSyDzaPV0_3tk3Ji7i2IwzyJdzRLNV3Xhxus`)
        const jsonedData = await response.json()
        return jsonedData
    } catch (error) {
        console.log(error);
    }
})
export const GetSearchBook = createAsyncThunk('searchBook', async()=>{
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=popular&orderBy=newest&key=AIzaSyDzaPV0_3tk3Ji7i2IwzyJdzRLNV3Xhxus`)
        const jsonedData = await response.json()
        return jsonedData
    } catch (error) {
        console.log(error);
    }
})

export const GetDinamicBook = createAsyncThunk('dinamicBook', async(id)=>{
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDzaPV0_3tk3Ji7i2IwzyJdzRLNV3Xhxus`)
        const jsonedData = await response.json()
        return jsonedData
    } catch (error) {
        console.log(error);
    }
})

const BookSlice = createSlice({
    name:'book',
    initialState:{
        loading:false,
        dinamicLoading:false,
        dinamicError:false,
        error:false,
        recommendData:[],
        dinamicBook:[],
        populerLoading:false,
        populerError:false,
        populerData:[],
        storyLoading:false,
        storyError:false,
        storyData:[],
        likeLoading:false,
        likeError:false,
        likeData:[],
        searchLoading:false,
        searchError:false,
        searchData:[],
    },
    extraReducers:(builder)=>{
        builder.addCase(GetBook.pending,(state)=>{
            state.loading= true
        })
        .addCase(GetBook.fulfilled,(state,action)=>{
            state.recommendData= action.payload
            state.loading =false
        })
        .addCase(GetBook.rejected,(state)=>{
            state.error=true
            state.loading=false
            state.recommendData=[]
        })
        .addCase(GetDinamicBook.pending,(state)=>{
            state.dinamicLoading= true
        })
        .addCase(GetDinamicBook.fulfilled,(state,action)=>{
            state.dinamicBook= action.payload
            state.dinamicLoading =false
        })
        .addCase(GetDinamicBook.rejected,(state)=>{
            state.dinamicError=true
            state.dinamicLoading=false
            state.dinamicBook=[]
        })
        .addCase(GetPopulerBook.pending,(state)=>{
            state.populerLoading= true
        })
        .addCase(GetPopulerBook.fulfilled,(state,action)=>{
            state.populerData= action.payload
            state.populerLoading =false
        })
        .addCase(GetPopulerBook.rejected,(state)=>{
            state.populerError=true
            state.populerLoading=false
            state.populerData=[]
        })
        .addCase(GetNewBook.pending,(state)=>{
            state.storyLoading= true
        })
        .addCase(GetNewBook.fulfilled,(state,action)=>{
            state.storyData= action.payload
            state.storyLoading =false
        })
        .addCase(GetNewBook.rejected,(state)=>{
            state.storyError=true
            state.storyLoading=false
            state.storyData=[]
        })
        .addCase(GetLikeBook.pending,(state)=>{
            state.likeLoading= true
        })
        .addCase(GetLikeBook.fulfilled,(state,action)=>{
            state.likeData= action.payload
            state.likeLoading =false
        })
        .addCase(GetLikeBook.rejected,(state)=>{
            state.likeError=true
            state.likeLoading=false
            state.likeData=[]
        })
        .addCase(GetSearchBook.pending,(state)=>{
            state.searchLoading= true
        })
        .addCase(GetSearchBook.fulfilled,(state,action)=>{
            state.searchData= action.payload
            state.searchLoading =false
        })
        .addCase(GetSearchBook.rejected,(state)=>{
            state.searchError=true
            state.searchLoading=false
            state.searchData=[]
        })
    }
})

export default BookSlice.reducer