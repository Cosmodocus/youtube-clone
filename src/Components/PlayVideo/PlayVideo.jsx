import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import { API_KEY, valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
	const { videoId } = useParams();
	const [apiData, setApiData] = useState(null);
	const [channelData, setChannelData] = useState(null);
	const [replyData, setReplyData] = useState([]);

	const fetchVideoData = async () => {
		// Fetching Video data
		const videoDetailsUrl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}
		`;
		await fetch(videoDetailsUrl)
			.then((response) => response.json())
			.then((data) => setApiData(data.items[0]));
	};

	const fetchChannelData = async () => {
		// Fetching Channel Data
		const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
		await fetch(channelDataUrl)
			.then((response) => response.json())
			.then((data) => setChannelData(data.items[0]));
	};

	const fetchReplyData = async () => {
		// Fetching Reply Data
		const replyDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
		await fetch(replyDataUrl)
			.then((res) => res.json())
			.then((data) => setReplyData(data.items));
	};

	useEffect(() => {
		fetchVideoData();
	}, [videoId]);

	useEffect(() => {
		fetchChannelData();
	}, [apiData]);

	return (
		<div className='play-video'>
			<iframe
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			></iframe>
			<h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
			<div className='play-video-info'>
				<p>
					{apiData ? valueConverter(apiData.statistics.viewCount) : 'X'} Views
					&bull;{' '}
					{apiData ? moment(apiData.snippet.publishedAt).fromNow() : null}
				</p>
				<div>
					<span>
						<img
							src={like}
							alt=''
						/>
						{apiData ? valueConverter(apiData.statistics.likeCount) : 155}
					</span>
					<span>
						<img
							src={dislike}
							alt=''
						/>
					</span>
					<span>
						<img
							src={share}
							alt=''
						/>
						Share
					</span>
					<span>
						<img
							src={save}
							alt=''
						/>
						Save
					</span>
				</div>
			</div>
			<hr />

			<div className='publisher'>
				<img
					src={channelData ? channelData.snippet.thumbnails.default.url : jack}
					alt=''
				/>
				<div>
					<p>{apiData ? apiData.snippet.channelTitle : 'Error'}</p>
					<span>
						{channelData
							? valueConverter(channelData.statistics.subscriberCount)
							: ''}{' '}
						Subscribers
					</span>
				</div>
				<button>Subscribe</button>
			</div>

			<div className='vid-description'>
				<p>
					{apiData
						? apiData.snippet.description.slice(0, 250) + '...'
						: 'Description Here'}
				</p>
				<hr />
				<h4>
					{apiData ? valueConverter(apiData.statistics.commentCount) : 102}{' '}
					Comments
				</h4>
				{replyData.map((item, index) => {
					return (
						<div
							key={index}
							className='comment'
						>
							<img
								src={
									replyData
										? item.snippet.topLevelComment.snippet.authorProfileImageUrl
										: jack
								}
								alt=''
							/>
							<div>
								<h3>
									{item.snippet.topLevelComment.snippet.authorDisplayName}
									<span>1 day ago</span>
								</h3>
								<p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
								<div className='comment-action'>
									<img
										src={like}
										alt=''
									/>
									<span>{item.snippet.topLevelComment.snippet.likeCount}</span>
									<img
										src={dislike}
										alt=''
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PlayVideo;
