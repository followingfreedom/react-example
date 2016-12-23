import 'whatwg-fetch';

export const INDEX_PAGE_INFO = "INDEX_PAGE_INFO";
export const NEWS_PAGE_INFO = 'NEWS_PAGE_INFO';

export function getIndexInfo(json){
	return {
		type:INDEX_PAGE_INFO,
		json
	}
}

export function fetchIndexInfo(request){
	return dispatch=>{
		return fetch(request)
				.then(response=>{
					return response.json();
				})
				.then(json=>{
					dispatch(getIndexInfo(json));
				})
				.catch((error)=>{
					console.error("Get index info error: ", error);
				});
	}
}

export function getNewsInfo(json){
	return {
		type:NEWS_PAGE_INFO,
		json
	}
}

export function fetchNewsInfo(request){
	return dispatch=>{
		return fetch(request)
				.then(response=>{
					return response.json();
				})
				.then(json=>{
					dispatch(getNewsInfo(json));
				})
				.catch(error=>{
					console.error("Get news info error: ", error);
				})
	}
}