export type Post = {
    id:number,
    title:string,
    body:string
}

export type Movie = {
    avatar:string,
    titulo:string
}

export type UserInfo = {
    id:number,
    name:string,
    username:string,
    email:string,
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        geo:{
            lat:string,
            lng:string
        }
    }
    
}
export type List = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
export type PhotoList = {
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string
}

export type GetClimate = {
        name:string,
        country:string,
        temp:string,
        temp_max:string,
        temp_min:string,
        description:string,
        icon:string,
        humidity:string
    
}