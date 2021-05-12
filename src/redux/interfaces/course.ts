export interface course {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data:any
}
export interface courseData {
    id: number,
    name: string,
    tutor: string,
    attendees: number,
    list: any
}