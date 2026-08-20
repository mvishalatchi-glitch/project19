class SearchHotel {

    constructor(page) {
        this.page = page;
        this.location = page.locator('//select[@id="location"]');
        this.hotels=page.hotels('//select[@id="hotels"]')
        this.roomtype=page.roomtype('//select[@id="room_type"]')
        this.adultsperroom=page.adultsperroom('//select[@id="adult_room"]')
        this.select=page.select('//input[@id="Submit""]')
        
    }

    async selectLocation() {
        await this.location.selectOption({ index: 1 });
    }
    async SearchHotel(){
        await this.hotels.SearchHotel({})
    }
}