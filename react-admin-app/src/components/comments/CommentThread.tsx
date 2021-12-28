import { ReactElement, useEffect, useState } from "react";
import {
	useGetList,
	Record,
	useDataProvider,
	Identifier,
	useReferenceManyFieldController,
} from "react-admin";
import CommentCard from "./CommentCard";

import { useDispatch, useSelector } from "react-redux";
import { commentInsert, commentInserted } from "../../actions/actions";
import { CommentState } from "../../types";

const CommentThread = (record: Record): ReactElement => {
	const { parent_id } = record;
	const dataProvider = useDataProvider();
	const [isFirst, setFirst] = useState(true);
	const [commentId, setId] = useState(-1);
	const [ids, setIds] = useState<Identifier[]>([]);
	const [data, setData] = useState<boolean[]>([]);
	const [card_flags, setFlag] = useState<[]>([]);
	const [cardCount, setCount] = useState(0);
	const [openNew, setNew] = useState(true);
	const insertAt = useSelector((state: CommentState) => state.insertAt);
	const isInserted = useSelector((state: CommentState) => state.isCreate);
	const dispatch = useDispatch();

	const {
		data: childComments,
		ids: commentIds,
		loading,
		error,
		loaded,
	} = useGetList(
		"comments",
		{ page: 1, perPage: 100 },
		{ field: "date", order: "DESC" },
		{ parent_id: parent_id, resource: "comment" }
	);

	const handleDelete = (id: number) => {
		dataProvider
			.delete("comments", { id })
			.then((res) => {
				setIds((ids) =>
					ids.filter((item) => item !== id)
				);
				dispatch(commentInsert("false"));
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (loaded && isFirst) {
			setIds(commentIds);
			// @ts-ignore
			setData(childComments);
			// @ts-ignore
			setId(parent_id);

			setFirst(false);
		}
	}, [commentIds, childComments, loaded, isFirst]);

	const Card = (
		<CommentCard
			type="insert"
			resourceId={"0"}
			resource={"comment"}
			parent_id={record.parent_id}
			handleDelete={handleDelete}
		/>
	);

	var cards = new Array(20);

	for (var i = 0; i < cards.length; i++) {
		cards[i] = Card;
	}

	var flags = new Array(20);

	for (var i = 0; i < flags.length; i++) {
		flags[i] = false;
	}

	useEffect(() => {
		if (
			isInserted == "true" &&
			// @ts-ignore
			insertAt === commentId
		) {
			setNew(true);
		}
	}, [insertAt, isInserted]);

	const handleFlag = () => {
		if (openNew) {
			let count = cardCount + 1;

			setCount(count);
			flags[count - 1] = true;
			// @ts-ignore
			setFlag(flags);
			setNew(false);
			dispatch(commentInserted("false"));
		}
	};

	useEffect(() => {
		// @ts-ignore
		if (insertAt === commentId) {
			handleFlag();
		}
	}, [insertAt]);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>ERROR</p>;
	}

	return (
		<>
			{ids.map((id) => {
				// @ts-ignore
				const record = data[id];
				const card = (
					<CommentCard
						key={id}
						{...record}
						handleDelete={handleDelete}
						iscc={true}
					/>
				);
				return card;
			})}

			{cards.filter((card, index) => cardCount > index)}
		</>
	);
};

export default CommentThread;
