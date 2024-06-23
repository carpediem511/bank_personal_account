import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function Middleware() {
	//cookies().get('token')
	return NextResponse.redirect(new URL('/home', request.URL))
}

export const config = {
	matcher: ['/dashboard/:path*', '/admin'], //пишем роуты, при которых будут срабатывать условия, если пользовать перешел на dashboard то проверяем - авторизирован или нет, если нет, то не пропускаем
}

//функция, которая будет срабатывать при условии (последнее)