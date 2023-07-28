interface BookInterface{
        id?:string;
        title:string;
        author:string;
        pages:number;
        genre:string;
        reference:string;// stores the folder reference for fetching various pages of book
}



export default BookInterface