class Congnhan{
    constructor(stt,name,date,address,luong,chucvu){
        this.stt=stt;
        this.name=name;
        this.date=date;
        this.address=address;
        this.luong=luong;
        this.chucvu=chucvu;
    }
    sapxep(workers){
        workers.sort((a,b)=>{
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
         });
    }
}