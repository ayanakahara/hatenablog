export class Article {
    private _id: number
    private _title: string
    private _summary: string
    private _is_draft: boolean
    private _url: string
    private _publish_date: Date
    private _update_date: Date

    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get title(): string {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }

    get summary(): string {
        return this._summary
    }

    set summary(summary: string) {
        this._summary = summary
    }

    get is_draft(): boolean {
        return this._is_draft
    }

    set is_draft(is_draft: boolean) {
        this._is_draft = is_draft
    }

    get url(): string {
        return this._url
    }

    set url(url: string) {
        this._url = url
    }

    get publish_date(): Date {
        return this._publish_date
    }

    set publish_date(publish_date: Date) {
        this._publish_date = publish_date
    }

    get update_date(): Date {
        return this._update_date
    }

    set update_date(update_date: Date) {
        this._update_date = update_date
    }

    constructor(id: number, title: string, summary: string, is_draft: boolean, url: string, publish_date: Date, update_date: Date) {
        this._id = id
        this._title = title
        this._summary = summary
        this._is_draft = is_draft
        this._url = url
        this._publish_date = publish_date
        this._update_date = update_date
      }
}