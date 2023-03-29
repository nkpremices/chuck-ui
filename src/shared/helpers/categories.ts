export const categoryImagesSet = {
  animal:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbTyoyJrMlDAMOjKevx8qeDz-SNUSRH3hPA',
  career:
    'https://res.cloudinary.com/premices/image/upload/v1583939170/samples/ecommerce/leather-bag-gray.jpg',
  celebrity:
    'https://static01.nyt.com/images/2021/02/28/fashion/28SPCS-COMBO/28SPCS-COMBO-videoSixteenByNine3000.jpg?year=2021&h=1688&w=3000&s=5c6c4588ab515f79a270b8914cd48bfbf70dc44ea734ad96824d5bd714230b22&k=ZQJBKqZ0VN&tw=1',
  dev: 'https://www.udacity.com/blog/wp-content/uploads/2021/01/Become-a-full-stack-web-developer_Blog-scaled.jpeg',
  explicit:
    'https://cdn.shopify.com/s/files/1/0327/6806/5668/files/jpeg_explicit_logo_SMALL_3_acd3094f-4a90-4b6f-9f7c-7cbe8459cfa2.jpg?height=628&pad_color=ffffff&v=1614373754&width=1200',
  fashion:
    'https://hips.hearstapps.com/hmg-prod/images/spring-2022-trends-1642786776.jpg?resize=1200:*',
  food: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
  history: 'https://f.hubspotusercontent10.net/hubfs/6448316/history.jpg',
  money:
    'https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
  movie:
    'https://www.sanantoniothingstodo.com/wp-content/uploads/2021/06/SanAntonioMovies_featured2.jpg',
  music:
    'https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg',
  political:
    'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/05191207/Political-Leaders.png',
  religion:
    'https://www.pewresearch.org/wp-content/uploads/2020/03/FT_20.03.10_whoComesToMind_featured.png',
  science:
    'https://static.wixstatic.com/media/c58dc2_d0d844dadc0245a792d0b47994fa2fb8~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c58dc2_d0d844dadc0245a792d0b47994fa2fb8~mv2.png',
  sport:
    'https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg',
  travel:
    'https://images.squarespace-cdn.com/content/v1/5b0eb59df793928fa7f488ff/1536780543743-TZT0SJMRKV5LUOOY8FS0/Industryyyy.jpg',
};
const defaultCategoryImageUrl =
  'https://res.cloudinary.com/premices/image/upload/v1583939172/samples/landscapes/nature-mountains.jpg';

export function getCategoryImage(
  category: keyof typeof categoryImagesSet | string,
) {
  const image = categoryImagesSet[category as keyof typeof categoryImagesSet];
  return image || defaultCategoryImageUrl;
}
