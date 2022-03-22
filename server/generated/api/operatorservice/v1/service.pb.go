// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: temporal/api/operatorservice/v1/service.proto

package operatorservice

import (
	context "context"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() {
	proto.RegisterFile("temporal/api/operatorservice/v1/service.proto", fileDescriptor_a603f8bc80c66d47)
}

var fileDescriptor_a603f8bc80c66d47 = []byte{
	// 334 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2d, 0x49, 0xcd, 0x2d,
	0xc8, 0x2f, 0x4a, 0xcc, 0xd1, 0x4f, 0x2c, 0xc8, 0xd4, 0xcf, 0x2f, 0x48, 0x2d, 0x4a, 0x2c, 0xc9,
	0x2f, 0x2a, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2f, 0x33, 0xd4, 0x87, 0x32, 0xf5, 0x0a,
	0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0xe4, 0x61, 0xca, 0xf5, 0x12, 0x0b, 0x32, 0xf5, 0xd0, 0x94, 0xeb,
	0x95, 0x19, 0x4a, 0x99, 0x11, 0x32, 0xaf, 0x28, 0xb5, 0xb0, 0x34, 0xb5, 0xb8, 0x24, 0xbe, 0x28,
	0xb5, 0xb8, 0x20, 0x3f, 0xaf, 0x18, 0x6a, 0xb0, 0xd1, 0x1d, 0x66, 0x2e, 0x7e, 0x7f, 0xa8, 0xea,
	0x60, 0x88, 0x6a, 0xa1, 0x49, 0x8c, 0x5c, 0xc2, 0x8e, 0x29, 0x29, 0xc1, 0xa9, 0x89, 0x45, 0xc9,
	0x19, 0x8e, 0x25, 0x25, 0x45, 0x99, 0x49, 0xa5, 0x25, 0xa9, 0xc5, 0x42, 0xd6, 0x7a, 0x04, 0x5c,
	0xa1, 0x87, 0x45, 0x57, 0x10, 0xc4, 0x5e, 0x29, 0x1b, 0xf2, 0x34, 0x43, 0x1c, 0xab, 0xc4, 0x20,
	0x34, 0x9b, 0x91, 0x4b, 0x2c, 0x28, 0x35, 0x37, 0xbf, 0x2c, 0x15, 0xc3, 0x5d, 0x76, 0x04, 0x8d,
	0xc6, 0xae, 0x11, 0xe6, 0x34, 0x7b, 0xb2, 0xf5, 0xc3, 0x5d, 0x37, 0x95, 0x91, 0x4b, 0xc4, 0x27,
	0xb3, 0xb8, 0x04, 0xc3, 0x6d, 0x84, 0xbd, 0x8d, 0x4d, 0x1b, 0xcc, 0x65, 0xb6, 0x64, 0xea, 0x86,
	0xb9, 0xcb, 0xe9, 0x19, 0xe3, 0x85, 0x87, 0x72, 0x0c, 0x37, 0x1e, 0xca, 0x31, 0x7c, 0x78, 0x28,
	0xc7, 0xd8, 0xf0, 0x48, 0x8e, 0x71, 0xc5, 0x23, 0x39, 0xc6, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c,
	0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0xf1, 0xc5, 0x23, 0x39, 0x86, 0x0f, 0x8f, 0xe4, 0x18, 0x27,
	0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x06, 0x2e, 0xa5, 0xcc, 0x7c,
	0x42, 0x36, 0x3b, 0xf1, 0x40, 0x93, 0x4b, 0x00, 0x28, 0x1d, 0x05, 0x30, 0x46, 0x99, 0xa6, 0x23,
	0xe9, 0xc9, 0xcc, 0xc7, 0x91, 0x0e, 0xad, 0xd1, 0x84, 0x56, 0x31, 0xc9, 0x87, 0xc0, 0x34, 0x39,
	0x16, 0x64, 0xea, 0xa1, 0xa5, 0x45, 0xbd, 0x30, 0xc3, 0x57, 0x4c, 0x4a, 0x30, 0x15, 0x56, 0x56,
	0x8e, 0x05, 0x99, 0x56, 0x56, 0x68, 0x6a, 0xac, 0xac, 0xc2, 0x0c, 0x93, 0xd8, 0xc0, 0xc9, 0xd9,
	0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x03, 0xcb, 0xbc, 0xe0, 0x58, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// OperatorServiceClient is the client API for OperatorService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OperatorServiceClient interface {
	// AddSearchAttributes add custom search attributes.
	//
	// If successful, returns AddSearchAttributesResponse.
	// If fails, returns INTERNAL code with temporal.api.errordetails.v1.SystemWorkflowFailure in Error Details
	AddSearchAttributes(ctx context.Context, in *AddSearchAttributesRequest, opts ...grpc.CallOption) (*AddSearchAttributesResponse, error)
	// RemoveSearchAttributes removes custom search attributes.
	RemoveSearchAttributes(ctx context.Context, in *RemoveSearchAttributesRequest, opts ...grpc.CallOption) (*RemoveSearchAttributesResponse, error)
	// GetSearchAttributes returns comprehensive information about search attributes.
	ListSearchAttributes(ctx context.Context, in *ListSearchAttributesRequest, opts ...grpc.CallOption) (*ListSearchAttributesResponse, error)
}

type operatorServiceClient struct {
	cc *grpc.ClientConn
}

func NewOperatorServiceClient(cc *grpc.ClientConn) OperatorServiceClient {
	return &operatorServiceClient{cc}
}

func (c *operatorServiceClient) AddSearchAttributes(ctx context.Context, in *AddSearchAttributesRequest, opts ...grpc.CallOption) (*AddSearchAttributesResponse, error) {
	out := new(AddSearchAttributesResponse)
	err := c.cc.Invoke(ctx, "/temporal.api.operatorservice.v1.OperatorService/AddSearchAttributes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *operatorServiceClient) RemoveSearchAttributes(ctx context.Context, in *RemoveSearchAttributesRequest, opts ...grpc.CallOption) (*RemoveSearchAttributesResponse, error) {
	out := new(RemoveSearchAttributesResponse)
	err := c.cc.Invoke(ctx, "/temporal.api.operatorservice.v1.OperatorService/RemoveSearchAttributes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *operatorServiceClient) ListSearchAttributes(ctx context.Context, in *ListSearchAttributesRequest, opts ...grpc.CallOption) (*ListSearchAttributesResponse, error) {
	out := new(ListSearchAttributesResponse)
	err := c.cc.Invoke(ctx, "/temporal.api.operatorservice.v1.OperatorService/ListSearchAttributes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OperatorServiceServer is the server API for OperatorService service.
type OperatorServiceServer interface {
	// AddSearchAttributes add custom search attributes.
	//
	// If successful, returns AddSearchAttributesResponse.
	// If fails, returns INTERNAL code with temporal.api.errordetails.v1.SystemWorkflowFailure in Error Details
	AddSearchAttributes(context.Context, *AddSearchAttributesRequest) (*AddSearchAttributesResponse, error)
	// RemoveSearchAttributes removes custom search attributes.
	RemoveSearchAttributes(context.Context, *RemoveSearchAttributesRequest) (*RemoveSearchAttributesResponse, error)
	// GetSearchAttributes returns comprehensive information about search attributes.
	ListSearchAttributes(context.Context, *ListSearchAttributesRequest) (*ListSearchAttributesResponse, error)
}

// UnimplementedOperatorServiceServer can be embedded to have forward compatible implementations.
type UnimplementedOperatorServiceServer struct {
}

func (*UnimplementedOperatorServiceServer) AddSearchAttributes(ctx context.Context, req *AddSearchAttributesRequest) (*AddSearchAttributesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddSearchAttributes not implemented")
}
func (*UnimplementedOperatorServiceServer) RemoveSearchAttributes(ctx context.Context, req *RemoveSearchAttributesRequest) (*RemoveSearchAttributesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveSearchAttributes not implemented")
}
func (*UnimplementedOperatorServiceServer) ListSearchAttributes(ctx context.Context, req *ListSearchAttributesRequest) (*ListSearchAttributesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSearchAttributes not implemented")
}

func RegisterOperatorServiceServer(s *grpc.Server, srv OperatorServiceServer) {
	s.RegisterService(&_OperatorService_serviceDesc, srv)
}

func _OperatorService_AddSearchAttributes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddSearchAttributesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperatorServiceServer).AddSearchAttributes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/temporal.api.operatorservice.v1.OperatorService/AddSearchAttributes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperatorServiceServer).AddSearchAttributes(ctx, req.(*AddSearchAttributesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OperatorService_RemoveSearchAttributes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveSearchAttributesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperatorServiceServer).RemoveSearchAttributes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/temporal.api.operatorservice.v1.OperatorService/RemoveSearchAttributes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperatorServiceServer).RemoveSearchAttributes(ctx, req.(*RemoveSearchAttributesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OperatorService_ListSearchAttributes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSearchAttributesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OperatorServiceServer).ListSearchAttributes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/temporal.api.operatorservice.v1.OperatorService/ListSearchAttributes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OperatorServiceServer).ListSearchAttributes(ctx, req.(*ListSearchAttributesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _OperatorService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "temporal.api.operatorservice.v1.OperatorService",
	HandlerType: (*OperatorServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddSearchAttributes",
			Handler:    _OperatorService_AddSearchAttributes_Handler,
		},
		{
			MethodName: "RemoveSearchAttributes",
			Handler:    _OperatorService_RemoveSearchAttributes_Handler,
		},
		{
			MethodName: "ListSearchAttributes",
			Handler:    _OperatorService_ListSearchAttributes_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "temporal/api/operatorservice/v1/service.proto",
}
