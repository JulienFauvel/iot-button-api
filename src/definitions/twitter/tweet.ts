interface TwitterUser {
    id: number;
    name: string;
    screen_name: string;
    location: string;
    url: string;
    profile_image_url_https: string;
}

interface Tweet {
    created_at: string;
    id: number;
    text: string;
    user: TwitterUser;
}
