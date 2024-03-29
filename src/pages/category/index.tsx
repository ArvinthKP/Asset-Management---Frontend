import { useEffect, useState } from "react";
import Breadcrumb from "../../component/Breadcrumb";
import CategoryData from "../category/CategoryData";
import { useGetAllCategoryMutation } from "../../store/api/categoryApi";
import Loader from "../../component/Loader";
import toast from "react-hot-toast";

const CATEGORY_TABLE_HEAD = [
  { id: "id", label: "ID"},
  { id: "name", label: "NAME"},
  { id: "code", label: "CODE"},
  { id: "count", label: "COUNT"},
  { id: "assetTypeName", label: "ASSET TYPE"},
  { id: "action", label: "ACTION"},
];

const Category = () => {
  const offset = 5;
  const [isLoading, setIsLoading ] = useState(true);
  const [error, setError ] = useState(false);
  const [getAllCategory, getAllCategoryResponse] = useGetAllCategoryMutation();
  const [categoryData, setCategoryData] = useState<any>(null);

  useEffect(() => {
    getCategoryBySearch("", 0 , offset);
  },[]);

  useEffect(() => {
    if(getAllCategoryResponse.isSuccess) {
      setCategoryData(getAllCategoryResponse.data.data);
    }
    if(getAllCategoryResponse.isError) {
      toast.error(getAllCategoryResponse.error.message)
      setIsLoading(false);
      setError(true);
    }
  },[getAllCategoryResponse]);

  useEffect(() => {
    if(categoryData !== null)
      setIsLoading(false);
  },[categoryData]);

  const getCategoryBySearch = (param: string, page: number, offset: number) => {
    getAllCategory({ searchParam: param, page: page, offset: offset });
  }

  return (
    <>
      <Breadcrumb pageName="Catgeory"/>
      <div className="flex flex-col gap-10 shadow-md">
        {isLoading ?
          <Loader />
          : error ? <></> :
          <CategoryData
            tableData={categoryData}
            getDataBySearch={getCategoryBySearch} 
            tableHeadColumns={CATEGORY_TABLE_HEAD} 
            offset={offset}
          />
        }
      </div>
    </>
  );
};

export default Category;