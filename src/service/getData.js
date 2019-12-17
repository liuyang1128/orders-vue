/**
 * Created by zc on 2017/3/18.
 * AJAX 同一管理
 */

import ajax from "@/utils/http.js";


//用户登录
var login = myData => ajax('post', '/user/login', myData);

//商品图片上传
var upLoadGoodsImgs = myData => ajax('post','/upload/img',myData);

//收款码上传
var upLoadPayImgs = myData => ajax('post','/upload/money_code',myData);

//获取我的菜单列表
var getMenuCodeList=myData=>ajax('get','/permission/menu/me',myData);

//获取仓库列表
var getWarehouseList = myData=>ajax('get','/warehouse',myData);

//查询仓库详情
var getWarehouseInfo=id=>ajax('get','/warehouse/'+id);

//删除仓库
var deleteWarehouseInfo=id=>ajax('delete','/warehouse/'+id);

//新增仓库
var addWarehouse=myData=>ajax('post','/warehouse',myData);

//获取分类列表
var getCategoryList=(id)=>ajax('get','/categorys/'+id);

//查询分类自身信息（id）
var getCategorySelf=id=>ajax('get','/categoryself/'+id);

//新增分类
var addCategory=myData=>ajax('post','/categorys',myData);

//获取商品列表(分类id)
var getProductList=myData=>ajax('get','/product/category',myData);

//查询所有供应商
var getSupplierList=myData=>ajax('get','/supplier',myData);

//查询供应商详情
var getSupplierInfo=id=>ajax('get','/supplier/'+id);

//新增供应商
var addSupplier=myData=>ajax('post','/supplier',myData);

//删除供应商
var deleteSupplierInfo=id=>ajax('delete','/supplier/'+id);

//查询供应商采购记录
var getSupplierOrderHistory=(id,myData)=>ajax('get','/storage/supplier/'+id,myData);

//新增客户
var addCustomer=myData=>ajax('post','/customer',myData);

//查询所有客户
var getCustomerList=myData=>ajax('get','/customer',myData);

//查询客户详情
var getCustomerInfo=id=>ajax('get','/customer/'+id);

//查询客户交易记录
var getCustomerTradeHistory=(id,myData)=>ajax('get','/sale/'+id,myData);

//删除客户
var deleteCustomerInfo=id=>ajax('delete','/customer/'+id);

//查询所有采购订单
var getPurchaseOrderList=myData=>ajax('get','/storage',myData);

//查询采购单详情
var getPurchaseOrderInfo=number=>ajax('get','/storage/'+number);

//获取商品列表(商品名)
var getProductListByName=myData=>ajax('get','/product/search',myData);

//获取商品列表(热/滞销)
var getHotOrColdProductList=myData=>ajax('get','/report/hot_cold_sale',myData);

//生成商品条码
var generateBarCode=myData=>ajax('get','/until/bar_code',myData);

//获取我的信息,校验token
var getMyUserInfo=myData=>ajax('get','/user/me',myData);

//新增商品
var addProduct=myData=>ajax('post','/product',myData);

//修改商品
var updateProduct=myData=>ajax('put','/product',myData);

//删除商品
var deleteProduct=id=>ajax('delete','/product/'+id);

//获取员工列表
var getEmployeeList=myData=>ajax('get','/user/employee',myData);

//获取员工列表
var addEmployee=myData=>ajax('post','/user/employee',myData);

//新增店长
var addStoreManager=myData=>ajax('post','/user/register',myData);

//查询店长信息
var getStoreManagerInfo=name=>ajax('get','/user/me',+name);

//查询商店信息
var getStore=myData=>ajax('get','/store',myData);

//检查用户名
var getCheckName=myData=>ajax('get','/user/check_username',myData);

//新增入库单
var addPurchaseOrder=myData=>ajax('post','/storage',myData);

//查询单个商品（商品id）
var getProductById=id=>ajax('get','/product/'+id);

//查询销售历史订单
var getSellHistoryList=myData=>ajax('get','/sale/sale_table',myData);

//查询临期商品
var getEarlyWarningList=(myData,days)=>ajax('get','/product/nearDay/'+days,myData);

//查询库存不足商品
var getStockWarningList=(myData,numbers)=>ajax('get','/product/lowWarning/'+numbers,myData);

//客户欠款查询
var getCustomerDebtList=myData=>ajax('get','/report/customer_debt',myData);

//供应商对账查询
var getSupplierDebtList=myData=>ajax('get','/supplier',myData);

//销售汇总查询
var getSellTotal=myData=>ajax('get','/sale/total',myData);

//根据barCode查询商品
var getProductBybarCode=barCode=>ajax('get','/product/bar_code/'+barCode,{});

//发短信验证码
var sendSMS=myData=>ajax('get','/user/phoneCode',myData);

//短信验证码登陆
var smsLogin=myData=>ajax('post','/user/phoneLogin',myData);

//下单
var placeOrder=myData=>ajax('post','/sale/place_order',myData);

//入库
var placeStorage=myData=>ajax('post','/storage',myData);

//查询未发货订单
var getNotOutboundList=myData=>ajax('get','/delivery/unsend_orders',myData);

//支付
var pay=(orderId,myData)=>ajax('post','/sale/payment/'+orderId,myData);

//获取角色列表
var getRoleList=myData=>ajax('get','/role',myData);

//获取员工信息（员工账号）
var getEmployeeByUserName=username=>ajax('get','/user/employeeInfo/'+username);

//变更角色
var changeEmployeeRoleListByUserName=(username,myData)=>ajax('put','/role/change_role/'+username,myData);

//上传并修改我的头像
var changeMyAvator=myData=>ajax('post','/upload/avator/me',myData);

//修改个人信息
var updateStoreManager=myData=>ajax('put','/user/myInfo',myData);

export {
  login,
  getMenuCodeList,
  upLoadGoodsImgs,
  getWarehouseList,
  upLoadPayImgs,
  getCategoryList,
  getProductList,
  getHotOrColdProductList,
  getSupplierList,
  getCustomerList,
  getEmployeeList,
  getPurchaseOrderList,
  getProductListByName,
  generateBarCode,
  getMyUserInfo,
  addProduct,
  deleteProduct,
  getCategorySelf,
  updateProduct,
  addCategory,
  getSellHistoryList,
  getEarlyWarningList,
  getCustomerDebtList,
  getSupplierDebtList,
  getSellTotal,
  addEmployee,
  getProductBybarCode,
  getSupplierInfo,
  getCustomerInfo,
  getCustomerTradeHistory,
  getWarehouseInfo,
  getPurchaseOrderInfo,
  addWarehouse,
  addCustomer,
  addSupplier,
  getSupplierOrderHistory,
  addPurchaseOrder,
  addStoreManager,
  deleteWarehouseInfo,
  deleteSupplierInfo,
  getStockWarningList,
  deleteCustomerInfo,
  getCheckName,
  getStoreManagerInfo,
  updateStoreManager,
  getProductById,
  getStore,
  sendSMS,
  smsLogin,
  placeOrder,
  placeStorage,
  getNotOutboundList,
  pay,
  getRoleList,
  getEmployeeByUserName,
  changeEmployeeRoleListByUserName,
  changeMyAvator
}
