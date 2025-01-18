export interface BlogResponse {
    list: List[]
    meta_info: MetaInfo
    next_page: number
}

export interface List {
    bloggerAvatar: string
    bloggerId: number
    bloggerName: string
    canViewBlog: boolean
    isProBlog: boolean
    is_bookmarked: boolean
    itemId: number
    meta_data: string
    primaryAgeGroup: string
    proText: string
    thumb: string
    title: string
    type: string
    url: string
    viewsCount: string
}

export interface MetaInfo {
    "facebookArticle:author": string
    "facebookArticle:publisher": string
    facebookCreator: string
    "facebookOg:description": string
    "facebookOg:image": string
    "facebookOg:site_name": string
    "facebookOg:title": string
    "facebookOg:type": string
    "facebookOg:url": string
    metaDescription: string
    metaImage: string
    metaKeyword: string
    metaName: string
    metaTitle: string
    twitterCard: string
    twitterCreator: string
    twitterDescription: string
    twitterSite: string
    twitterTitle: string
}
