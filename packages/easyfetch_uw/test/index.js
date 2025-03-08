import CreateFetchIt from 'easyfetch_uw'
import params from 'fetch_it_uw/params'

const FetchIt = CreateFetchIt({ base_url: "/"})

const get_users = new FetchIt("/users/ok")

