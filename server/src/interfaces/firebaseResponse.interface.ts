export class FirestoreBookInterface {
	id: string;
	data: {
		title: string;
		pages: number;
		reference: string;
		genre: string;
		author: string;
	};
}
