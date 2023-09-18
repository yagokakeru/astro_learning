/**
 * 日付をフォーマットする関数
 * 
 * maicroCMSから取得した日付をYYYY.MM.DDにフォーマットする
 * 
 * @param date string maicroCMSから取得した日付
 */
export const dateFormat = (date: string) => {
    const dateFormat =  new Date(date).toLocaleDateString('ja-JP',{
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).split('/').join('.');

    return dateFormat;
}